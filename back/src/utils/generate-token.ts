const SECRET = process.env.SECRET_KEY;
import jwt from "jsonwebtoken";

export const jwtHelper = {
	generateToken: (id: string) => {
		return jwt.sign({ id }, SECRET as string, { expiresIn: "1d" });
	},

	verifyToken: (token: string) => {
		return jwt.verify(token, SECRET as string);
	},
};
