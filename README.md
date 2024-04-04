# projeto-nlw-node
Projeto feito durante o NLW summit 2024. Esse projeto é apenas o back-end utilizando Node.js + Fastify + Prisma para o fornecimento de uma API REST.

## Preparando o projeto
Primeiro instale os arquivos de dependência do projeto:
```bash
npm i
# ou
npm install
```

## Rodando o projeto

Depois de tudo instalado, execute:

```bash
npm run db:migrate # Para criar as tabelas, inserir as Migrations e os dados das tabelas

# E depois:

npm run dev

# Caso queira abrir o Prisma Studio:

npm run db:studio
```