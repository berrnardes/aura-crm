import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../db/schemas/index";

export const connector = postgres(process.env.DATABASE_URL as string, {});

export const db = drizzle(connector, {
	schema,
	logger: true,
});

export type db = typeof db;
