import bodyParser from "body-parser";
import cors from "cors";
import express, { type Request, type Response } from "express";
import morgan from "morgan";

//ROUTES
import Product from "./routes/productRoute";
import User from "./routes/userRoute";

const app = express();
const PORT = Number(process.env.PORT) || 5001;

// MIDDLEWARES
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit: "100kb" }));

app.get("/health", (req: Request, res: Response) => {
	res.json({ message: "Server Running" });
});
app.use("/user", User);
app.use("/product", Product);

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Running at: http://localhost:${PORT}`);
});
