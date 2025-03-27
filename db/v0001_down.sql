-- Description: Create tables for the first version of the database, mainly the AUTH tables
-- https://github.com/nextauthjs/next-auth/blob/main/packages/adapter-d1/src/migrations.ts

DROP TABLE IF EXISTS "accounts";
DROP TABLE IF EXISTS "sessions";
DROP TABLE IF EXISTS "users";
DROP TABLE IF EXISTS "verification_tokens";