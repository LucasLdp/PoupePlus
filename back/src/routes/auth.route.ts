import { AuthService } from "@/modules/auth/auth.service";
import { UserRepository } from "@/modules/user/user.repository";
import { Router } from "express";
import { AuthController } from "modules/auth/auth.controller";
import { prisma } from "../prisma/prisma";

const route = Router();

const userRepository = new UserRepository(prisma);
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

route.post("/login", authController.login);
route.post("/register", authController.register);

export default route;
