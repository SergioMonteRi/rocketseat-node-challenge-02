import { execSync } from 'node:child_process'
import { afterAll, beforeAll, beforeEach, describe, it } from 'vitest'

import request from 'supertest'

import { app } from '../app'

describe('Meals routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })

  it(' should be able to create a new meal', async () => {
    const userCreationResponse = await request(app.server)
      .post('/users')
      .send({
        name: 'Lula Molusco',
        email: 'lmolusco@gmail.com',
        password: 'knex123@',
      })
      .expect(201)

    const cookies = userCreationResponse.get('Set-Cookie') as string[]

    await request(app.server)
      .post('/meals')
      .set('Cookie', cookies)
      .send({
        name: 'Strogonnoff',
        description: 'Frango com molho branco',
        isOnDiet: false,
        date: new Date(),
      })
      .expect(201)
  })

  it('should not to be able to create a new meal without sessionId', async () => {
    await request(app.server)
      .post('/users')
      .send({
        name: 'Lula Molusco',
        email: 'lmolusco@gmail.com',
        password: 'knex123@',
      })
      .expect(201)

    await request(app.server)
      .post('/meals')
      .send({
        name: 'Strogonnoff',
        description: 'Frango com molho branco',
        isOnDiet: false,
        date: new Date(),
      })
      .expect(401)
  })
})
