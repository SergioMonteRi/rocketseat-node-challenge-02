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

------------------------------------------------------

Project goals: 

- [] create user
- [] identify user between requests
- [] create a meal
     - description
     - name
     - date and hour
     - is part of diet or not
- [] edit a meal
- [] delete a meal
- [] get user metrics: 
     - amount of registered meals of a user
     - amount of in diet meals
     - amount of out diet meals
     - best sequence of meals in diet
- [] user just can visualize, edit and delete meals only that he created
