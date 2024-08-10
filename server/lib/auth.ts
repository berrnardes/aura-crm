import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { Lucia } from "lucia";

const db = new PrismaClient();

const adapter = new PrismaAdapter(db.session, db.user);

const lucia = new Lucia(adapter, {
	sessionCookie: {
		name: "iury-auth-cookie",
		expires: false,
		attributes: {
			secure: process.env.NODE_ENV === "production",
		},
	},
});
