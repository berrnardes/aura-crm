import { relations } from "drizzle-orm";
import {
	date,
	numeric,
	pgTable,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";
import { v7 as uui } from "uuid";

export const expense = pgTable("expense", {
	id: varchar("id", { length: 255 }).$defaultFn(() => {
		return uui();
	}),
	amount: numeric("amount", { precision: 7, scale: 2 }).notNull(),
	categoryId: varchar("category_id").references(() => expenseByCategory.id),
	createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
	updatedAt: date("updated_at", { mode: "string" }).defaultNow(),
});

export const expenseSummary = pgTable("expense_summary", {
	id: varchar("id", { length: 255 }).$defaultFn(() => {
		return uui();
	}),
	totalExpense: numeric("total_expense", { precision: 7, scale: 2 }).notNull(),
	categoryId: varchar("category_id").references(() => expenseByCategory.id),
});

export const expenseByCategory = pgTable("expense_by_category", {
	id: varchar("id", { length: 255 }).$defaultFn(() => {
		return uui();
	}),
	category: varchar("category", { length: 255 }).notNull(),
	amount: numeric("amount", { precision: 7, scale: 2 }).notNull(),
	createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
	updatedAt: date("updated_at", { mode: "string" }).defaultNow(),
});

// RELATIONS
export const expenseByCategoryRelations = relations(
	expenseByCategory,
	({ many }) => ({
		expenses: many(expense),
	})
);

export const expenseSummaryRelations = relations(
	expenseSummary,
	({ many }) => ({
		category: many(expenseByCategory),
	})
);
