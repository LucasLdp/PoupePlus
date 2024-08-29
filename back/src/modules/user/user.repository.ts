import { PrismaClient, User } from "@prisma/client";
import { createUserDTO, updateUserDTO } from "modules/user/userDTO";

export class UserRepository {
	constructor(private prisma: PrismaClient) {}

	getAll = async (): Promise<User[]> => {
		return await this.prisma.user.findMany();
	};

	getBy = async (params: Partial<User>): Promise<User | null> => {
		return await this.prisma.user.findFirst({ where: params });
	};

	getOne = async (id: string): Promise<User | null> => {
		return await this.prisma.user.findUnique({ where: { id } });
	};

	create = async (data: createUserDTO): Promise<User> => {
		return await this.prisma.user.create({ data });
	};

	update = async (id: string, data: updateUserDTO): Promise<User> => {
		return await this.prisma.user.update({ where: { id }, data });
	};

	destroy = async (id: string): Promise<User> => {
		return await this.prisma.user.delete({ where: { id } });
	};
}
