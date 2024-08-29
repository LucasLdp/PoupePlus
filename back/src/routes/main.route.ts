import { Router } from "express";
import userRoutes from "./user.route";
import authRoutes from "./auth.route";
import { AuthMiddleware } from "../middlewares/auth.middleware";

const route = Router();

route.get("/", (req, res) => {
	res.json("Hello World");
});

route.use("/auth", authRoutes);

/* BLOQUEIO 🛑 */ route.use(AuthMiddleware); /* BLOQUEIO 🛑  */

route.use("/users", userRoutes);

export { route };
