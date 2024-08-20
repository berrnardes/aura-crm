import { relations } from "drizzle-orm";
import { date, integer, numeric, pgTable, varchar } from "drizzle-orm/pg-core";
import { v7 as uuid } from "uuid";
import { purchase } from "./purchase";
import { sales } from "./sales";

const product = pgTable("products", {
	id: varchar("id", { length: 255 })
		.primaryKey()
		.$defaultFn(() => {
			return uuid();
		}),
	name: varchar("name", { length: 255 }).notNull(),
	price: numeric("price", { precision: 7, scale: 2 }).notNull(),
	rating: numeric("rating"),
	stockQuantity: integer("stock_quantity").notNull(),
	createdAt: date("created_at", { mode: "string" }).defaultNow(),
	updatedAt: date("updated_at", { mode: "string" }).defaultNow(),
});

// RELATIONS
export const productRelations = relations(product, ({ many }) => ({
	sales: many(sales),
	purchase: many(purchase),
}));

export default product;
