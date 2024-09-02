import cors from "cors";
import express from "express";
import "express-async-errors";
import { ErrorMiddleware } from "./middlewares/error.middleware";
import { route } from "./routes/main.route";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.use("/api", route);

server.use(ErrorMiddleware);
server.listen(3333, () => {
	console.log("http://localhost:3333/api");
});
