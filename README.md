1- change the *DATABASE_URL* in .env file
2- make *models* in the *prisma/schema.prisma*
To map your data model to the database schema, you need to use the prisma migrate CLI commands:
- npx prisma migrate dev --name init 
3- Install and generate Prisma Client
- npm install @prisma/client 

4- Whenever you make changes to your Prisma schema in the future, you manually need to invoke prisma generate in order to accommodate the changes in your Prisma Client API.

5- npx ts-node index.ts 

