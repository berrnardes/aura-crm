import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { Lucia } from "lucia";

const db = new PrismaClient();

const adapter = new PrismaAdapter(db.session, db.user);

interface DatabaseUserAttributes {
	username: string;
}

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		name: "auracrm-auth",
		attributes: {
			secure: process.env.NODE_ENV === "production",
		},
	},
	getUserAttributes: (attr) => {
		return {
			username: attr.username,
		};
	},
});

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}
