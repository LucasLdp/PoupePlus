import { Router } from "express";

import { BalanceController } from "../modules/balance/balance.controller";
import { BalanceRepository } from "../modules/balance/balance.repository";
import { BalanceService } from "../modules/balance/balance.service";

const balanceRepo = new BalanceRepository();
const balanceService = new BalanceService(balanceRepo);
const balanceController = new BalanceController(balanceService);

const route = Router();

route.get("/", balanceController.index);
route.get("/:id", balanceController.show);
route.post("/", balanceController.store);
route.put(":/id", balanceController.update);
route.delete("/:id", balanceController.destroy);

export default route;
