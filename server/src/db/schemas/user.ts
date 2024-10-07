import { date, pgTable, varchar } from "drizzle-orm/pg-core";
import { v7 as uuid } from "uuid";

const user = pgTable("user", {
	id: varchar("id", { length: 64 })
		.primaryKey()
		.$defaultFn(() => {
			return uuid();
		}),
	name: varchar("name", { length: 64 }).notNull(),
	email: varchar("email", { length: 255 }).notNull().unique(),
	password: varchar("password", { length: 255 }).notNull(),
	createdAt: date("created_at", { mode: "string" }).defaultNow(),
	updatedAt: date("updated_at", { mode: "string" }).defaultNow(),
});

export default user;
