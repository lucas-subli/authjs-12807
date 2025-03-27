# Description: Create tables for the first version of the database, mainly the AUTH tables
# https://github.com/nextauthjs/next-auth/blob/main/packages/adapter-d1/src/migrations.ts

pnpm dlx wrangler d1 execute auth-js-12807 --local --file 'db/v0001_up.sql'
# pnpm dlx wrangler d1 execute radar-players-prd --local --file 'db/v0001_down.sql'