import "express-async-errors";
import express from "express";
import cors from "cors";
import { route } from "./routes/main.route";
import { ErrorMiddleware } from "./middlewares/error.middleware";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.use("/api", route);

server.use(ErrorMiddleware);
server.listen(3333, () => {
	console.log("http://localhost:3333/api");
});
