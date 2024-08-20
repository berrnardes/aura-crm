import { relations } from "drizzle-orm";
import {
	integer,
	numeric,
	pgTable,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";
import { v7 as uuid } from "uuid";
import product from "./product";

export const purchase = pgTable("purchases", {
	id: varchar("id", { length: 255 })
		.primaryKey()
		.$defaultFn(() => {
			return uuid();
		}),
	quantity: integer("quantity").notNull(),
	productId: varchar("product_id").references(() => product.id),
	unitCost: numeric("unit_cost", { precision: 7, scale: 2 }).notNull(),
	totalCost: numeric("total_cost", { precision: 7, scale: 2 }).notNull(),
	createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
});

export const purchaseSummary = pgTable("purchase_summary", {
	id: varchar("id", { length: 255 })
		.primaryKey()
		.$defaultFn(() => {
			return uuid();
		}),
	totalPurchased: numeric("total_purchased", {
		precision: 7,
		scale: 2,
	}).notNull(),
	changePercentage: numeric("change_purchased", { precision: 7, scale: 2 }),
	createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
});

// RELATIONS
export const purchaseRelation = relations(purchase, ({ one }) => ({
	product: one(product, {
		fields: [purchase.productId],
		references: [product.id],
	}),
}));
