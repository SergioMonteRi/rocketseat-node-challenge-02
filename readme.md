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
    - 4.1 how to run the above command: npm run knex -- migrate:make create-users
    