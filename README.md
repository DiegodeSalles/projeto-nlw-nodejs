# projeto-nlw-node

Projeto feito durante o NLW summit 2024. Esse projeto é apenas o back-end utilizando Node.js + Fastify + Prisma para o fornecimento de uma API REST.

## Preparando o projeto

Primeiro instale os arquivos de dependência do projeto:

```bash
npm i
# ou
npm install
```

## Preparando a variável de ambiente

Na raíz do projeto crie um arquivo chamado '.env' e dentro dele, insira:

```bash
DATABASE_URL=file:./nome-do-banco.db
```


## Rodando o projeto

Depois de tudo instalado, execute:

```bash
npm run db:migrate # Para criar as tabelas, inserir as Migrations e os dados das tabelas

# E depois:

npm run dev

# ou

npm run start

# Caso queira abrir o Prisma Studio:

npm run db:studio
```
