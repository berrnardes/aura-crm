CREATE TABLE IF NOT EXISTS "products" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"price" numeric(7, 2) NOT NULL,
	"rating" numeric,
	"stock_quantity" integer NOT NULL,
	"created_at" date DEFAULT now(),
	"updated_at" date DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sales" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"quantity" integer NOT NULL,
	"unit_price" numeric(7, 2) NOT NULL,
	"total_amount" numeric(7, 2) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
