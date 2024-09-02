import { PrismaClient, User } from "@prisma/client";
import { createUserDTO, updateUserDTO } from "modules/user/userDTO";

export class UserRepository {
	constructor(private prisma: PrismaClient) {}

	getAll = async (): Promise<User[]> => {
		return await this.prisma.user.findMany();
	};

	getBy = async (params: Partial<User>) => {
		return await this.prisma.user.findFirst({
			where: params,
			include: {
				expenses: true,
				balances: true,
			},
		});
	};

	getOne = async (id: string) => {
		return await this.prisma.user.findUnique({
			where: { id },
			include: {
				expenses: true,
				balances: true,
			},
		});
	};

	create = async (data: createUserDTO) => {
		return await this.prisma.user.create({ data });
	};

	update = async (id: string, data: updateUserDTO) => {
		return await this.prisma.user.update({ where: { id }, data });
	};

	destroy = async (id: string) => {
		return await this.prisma.user.delete({ where: { id } });
	};
}
