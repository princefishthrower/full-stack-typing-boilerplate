# Full Stack Typing Boilerplate

This is a starter boilerplate to help you quickly build out fully typed API endpoints, where the frontend and backend applications derive their typings from a single shared source of truth.

This project corresponds to [this blog post.]().

Further improvements (which I may make shortly in a follow up post) would include:

- Advanced logging
- Swagger TypeScript decorators and API definition generation
- Advanced error handling
- Build pipelines and watchman for even faster dev (currently both `npm run dev` commands only run webpack and then the artifacts, and do not initiate file watchers of any sort)

However, these features and improvements would bloat the overall codebase. As for now, this current repository is the most skeleton I could consider while still providing the power of tools like `TypeScript` and `sequelize`.

## Prerequisites:

- An accessible instance of PostgreSQL
- These 3 environmental variables must exist in your `process.env` to ensure the PostgreSQL connection will work (and make sure the database with `FULL_STACK_TYPING_DB_NAME` has been created, i.e.: `psql postgres` then `CREATE DATABASE whatever_db_name_you_want_here;` 

```bash
FULL_STACK_TYPING_DB_NAME=the name of the db you want to use
FULL_STACK_TYPING_DB_USER=the PostgreSQL user
FULL_STACK_TYPING_DB_PASSWORD=the password for the PostgreSQL user
```

## Install Node Modules

Run `npm install` in both the `backend/` and `frontend/` folders.

## Migrate Test Data

Create the test data tables in your database:

`cd backend`
`npm run migrations`

## Start Backend Server

Within the `backend/` folder, start up the backend server with:

`npm run dev`

## Start Frontend Server

In a different terminal, within the `frontend/` folder, start up the frontend server with:

`npm run dev`

Feast your eyes on the wonderful types!