import { Router } from "express";

const route = Router();

import { prisma } from "@/prisma/prisma";
import { ExpenseController } from "../modules/expense/expense.controller";
import { ExpenseRepository } from "../modules/expense/expense.repository";
import { ExpenseService } from "../modules/expense/expense.service";

const expenseRepository = new ExpenseRepository(prisma);
const expenseService = new ExpenseService(expenseRepository);
const expenseController = new ExpenseController(expenseService);

route.get("/", expenseController.index);
route.get("/:id", expenseController.show);
route.post("/", expenseController.store);
route.put("/:id", expenseController.update);
route.delete("/:id", expenseController.destroy);

export default route;
