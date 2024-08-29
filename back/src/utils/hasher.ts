import { compare, hash } from "bcrypt";

export const hasher = {
	async makeHash(password: string): Promise<string> {
		return await hash(password, 10);
	},

	async comparePassword(password: string, hash: string): Promise<boolean> {
		return await compare(password, hash);
	},
};
