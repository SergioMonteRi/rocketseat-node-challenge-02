import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { FastifyInstance } from 'fastify'

import { knex } from '../database'
import { checkSessionIdExists } from '../middlewares/check-session-id-exists'

export async function usersRoutes(app: FastifyInstance) {
  app.get('/', { preHandler: [checkSessionIdExists] }, async () => {
    const users = await knex('users').select('*')

    return { users }
  })

  app.get('/:id', { preHandler: [checkSessionIdExists] }, async (request) => {
    const getUserParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getUserParamsSchema.parse(request.params)

    const user = await knex('users').where('id', id).first()

    return { user }
  })

  app.post('/', async (request, reply) => {
    const createUserBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    })

    const { name, email, password } = createUserBodySchema.parse(request.body)

    const userAlreadyExists = await knex('users').where('email', email).first()

    if (userAlreadyExists) {
      return reply.status(409).send({
        message: 'User already exists',
      })
    }

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    }

    await knex('users').insert({
      id: randomUUID(),
      name,
      email,
      password,
      session_id: sessionId,
    })

    return reply.status(201).send()
  })
}
