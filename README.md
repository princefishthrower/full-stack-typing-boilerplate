# Full Stack Typing Boilerplate

This is a starter boilerplate to help you quickly build out fully typed API endpoints, where the frontend application and backend server derive their typings from a single shared source of truth.

This repository is based on [this blog post]().

Further improvements (which I may make in a follow up repository & post) would include:

- Advanced logging
- Swagger TypeScript decorators and API definition generation
- Advanced error handling
- Build pipelines and file watchers for even faster dev (currently both `npm run dev` commands only run webpack and then the artifacts, and do not initiate file watchers of any sort)

However, these features and improvements would bloat the overall codebase. This repository is the most skeleton I could manage. Additional dependencies outside of the typical webpack, react, and typescript packages include only these four packages:

- `sequelize`
- `pg` (needed with `sequelize` for PostgreSQL connections)
- `express`
- `html-webpack-plugin`

## Prerequisites:

- Node.js Version >= 10.19.0
- An accessible instance of PostgreSQL
- These 3 environmental variables must exist in your environment variables (i.e. `process.env`) to ensure the PostgreSQL connection will work (and make sure the database with `FULL_STACK_TYPING_DB_NAME` has been created, i.e.: `psql postgres` then `CREATE DATABASE whatever_db_name_you_want_here;` 

```bash
FULL_STACK_TYPING_DB_NAME=the name of the db you want to use
FULL_STACK_TYPING_DB_USER=the PostgreSQL user
FULL_STACK_TYPING_DB_PASSWORD=the password for the PostgreSQL user
```

## Install Node Modules

Run `npm install` in both the `backend/` and `frontend/` folders.

## Migrate Test Data

Create the test data tables in your database:

```bash
cd backend
npm run migrations
```

## Start Backend Server

Within the `backend/` folder, package and start up the backend server with:

`npm run dev`

## Start Frontend Server

In a separate terminal, within the `frontend/` folder, package and start up the frontend server with:

`npm run dev`

Feast your eyes on the wonderful typing system!