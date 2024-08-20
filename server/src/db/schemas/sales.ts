import {
	integer,
	numeric,
	pgTable,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";
import { v7 as uuid } from "uuid";

export const sales = pgTable("sales", {
	id: varchar("id", { length: 255 })
		.primaryKey()
		.$defaultFn(() => {
			return uuid();
		}),
	quantity: integer("quantity").notNull(),
	unitPrice: numeric("unit_price", { precision: 7, scale: 2 }).notNull(),
	totalAmount: numeric("total_amount", { precision: 7, scale: 2 }).notNull(),
	createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
});

export const salesSummary = pgTable("sales_summary", {
	id: varchar("id", { length: 255 })
		.primaryKey()
		.$defaultFn(() => {
			return uuid();
		}),
	total: numeric("total", { precision: 7, scale: 2 }).notNull(),
	changePercentage: numeric("change_percentage", { precision: 7, scale: 2 }),
	createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
});
