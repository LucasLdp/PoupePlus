import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import authRoutes from "./auth.route";
import balanceRoutes from "./balance.route";
import expenseRoutes from "./expense.route";
import userRoutes from "./user.route";

const route = Router();

// Endpoint de teste
route.get("/", (_, res) => res.json("Hello World"));

route.use("/auth", authRoutes);

/* BLOQUEIO 🛑 */ route.use(AuthMiddleware); /* 🛑 BLOQUEIO  */

route.use("/users", userRoutes);
route.use("/balances", balanceRoutes);
route.use("/expenses", expenseRoutes);

export { route };
