import { migrate } from "drizzle-orm/postgres-js/migrator";
import { connector, db } from ".";
import config from "../../drizzle.config";

await migrate(db, { migrationsFolder: config.out as string });

connector.end();
