import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET_KEY;

export const jwtHelper = {
	generateToken: (id: string) => {
		return jwt.sign({ id }, SECRET as string, { expiresIn: "1d" });
	},

	verifyToken: (token: string) => {
		return jwt.verify(token, SECRET as string);
	},
};
