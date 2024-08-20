import bodyParser from "body-parser";
import cors from "cors";
import express, {
	type NextFunction,
	type Request,
	type Response,
} from "express";
import morgan from "morgan";

//ROUTES
import cookieParser from "cookie-parser";
import { StatusCodes } from "http-status-codes";
import { verifyRequestOrigin } from "lucia";
import { lucia } from "../lib/auth";
import Product from "./routes/productRoute";
import User from "./routes/userRoute";

const app = express();
const PORT = Number(process.env.PORT) || 5001;

// MIDDLEWARES
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:3000",
	})
);
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit: "100kb" }));
app.use(cookieParser());

app.use((req: Request, res: Response, next: NextFunction) => {
	if (req.method === "GET") {
		return next();
	}

	const originHeader = req.headers.origin ?? "";

	const hostHeader = req.headers.host ?? "";

	if (
		!hostHeader ||
		originHeader ||
		verifyRequestOrigin(originHeader, [hostHeader])
	) {
		res.status(StatusCodes.FORBIDDEN).end();
	}
});

app.use(async (req: Request, res: Response, next: NextFunction) => {
	const sessionId = lucia.readSessionCookie(req.headers.cookie ?? "");

	if (!sessionId) {
		res.locals.user = null;
		res.locals.session = null;
		return next();
	}

	const { session, user } = await lucia.validateSession(sessionId);
	if (session && session.fresh) {
		res.appendHeader(
			"Set-Cookie",
			lucia.createSessionCookie(session.id).serialize()
		);
	}

	if (!session) {
		res.appendHeader(
			"Set-Cookie",
			lucia.createBlankSessionCookie().serialize()
		);
	}

	res.locals.user = user;
	res.locals.session = session;

	console.log("User:", res.locals);
	return next();
});

// ROUTES
app.get("/health", (req: Request, res: Response) => {
	res.json({ message: "Server Running" });
});
app.use("/user", User);
app.use("/product", Product);

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Running at: http://localhost:${PORT}`);
});
