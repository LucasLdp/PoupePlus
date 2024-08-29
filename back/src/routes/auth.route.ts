import { Router } from "express";
import { AuthController } from "modules/auth/auth.controller";
import { AuthService } from "@modules/auth/auth.service";
import { prisma } from "../prisma/prisma";
import { UserRepository } from "@/modules/user/user.repository";

const route = Router();

const userRepo = new UserRepository(prisma);
const authService = new AuthService(userRepo);
const authContol = new AuthController(authService);

route.post("/login", authContol.login);
route.post("/register", authContol.register);

export default route;
