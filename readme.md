Configs steps: 

Configs structure: 

- 1 npm init
- 2 npm install -D typescript
- 3 npm install -D @types/node
- 4 npm install fastify
- 5 npm install tsx -D
- 6 add to package.json a run dev command: tsx watch src/server.ts
- 7 npm install eslint @rocketseat/eslint-config -D
- 8 create .eslintrc.json
- 9 add to package.json a run eslint command: eslint src --ext .ts --fix

Configs database with knex: 

- 1 npm install knex 
- 2 npm install sqlite3 -D
- 3 create batabase.ts
- 4 create root knexfile.ts
- 5 add to package.json a knex command: "node --no-warnings --import tsx ./node_modules/.bin/knex
    - 5.1 how to run the above command: npm run knex -- migrate:make users

Confis env

- 1 create file .env
- 2 import 'dotenv/config'
- 3 .env to gitignore
- 4 create folder src/env
- 5 npm install zod
- 6 validade env variables with zod schema
- 7 handle error

Developments

- 1 separe plugins into files 
- 2 register plugin on server.ts
- 3 declare Knex Table module to type tables

Tests

- 1 npm install vitest
- 2 npm install supertest 
- 3 create .spec.ts files
- 4 before all app.ready
- 5 after all app.close
- 6 before each execSync npm run knex migrage:rollback --all
- 7 before each execSync npm run knex migrate:latest
- 8 create env.test
- 9 verify process.env.NODE_ENV to use config env method and set path to .env.test


------------------------------------------------------

Project goals: 

- [X] create user
- [X] identify user between requests
- [X] create a meal
     - description
     - name
     - date and hour
     - is part of diet or not
- [X] read all meals from user
- [X] edit a meal (all above data)
- [X] delete a meal
- [X] get user metrics: 
     - amount of registered meals of a user
     - amount of in diet meals
     - amount of out diet meals
     - best sequence of meals in diet
- [X] user just can visualize, edit and delete meals only that he created
