import { Router } from "express";
import { UserController } from "modules/user/user.controller";
import { UserRepository } from "modules/user/user.repository";
import { prisma } from "../prisma/prisma";
import { UserService } from "@/modules/user/user.service";

const route = Router();

const userRepo = new UserRepository(prisma);
const userService = new UserService(userRepo);
const userController = new UserController(userService);

route.get("/", userController.index);
route.get("/:id", userController.show);
route.post("/", userController.store);
route.put("/:id", userController.update);
route.delete("/:id", userController.destroy);

export default route;
