import { UserRepository } from "modules/user/user.repository";
import { createUserDTO, updateUserDTO } from "modules/user/userDTO";

import { hasher } from "@/utils/hasher";
import { BadRequest, NotFound } from "@/utils/api-error";

export class UserService {
	constructor(private userRepository: UserRepository) {}

	getAllUsers = async () => {
		const users = await this.userRepository.getAll();
		return users.map((user) => {
			return {
				id: user.id,
				name: user.name,
				email: user.email,
				totalAmount: user.totalAmount,
			};
		});
	};

	getOneUser = async (id: string) => {
		const user = await this.userRepository.getOne(id);
		if (!user) {
			throw new NotFound("Usuário não encontrado");
		}
		return user;
	};

	createUser = async (data: createUserDTO) => {
		const existingUser = await this.userRepository.getBy({ email: data.email });
		if (existingUser) {
			throw new BadRequest("Este usuário já existe");
		}

		data.password = await hasher.makeHash(data.password);
		await this.userRepository.create(data);
		return { message: "Usuário criado com sucesso" };
	};

	updateUser = async (id: string, data: updateUserDTO) => {
		const user = await this.userRepository.getOne(id);
		if (!user) {
			throw new NotFound("Usuário não encontrado");
		}
		await this.userRepository.update(id, data);
		return { message: "Usuário atualizado com sucesso" };
	};

	deleteUser = async (id: string) => {
		const user = await this.userRepository.getOne(id);
		if (!user) {
			throw new NotFound("Usuário não encontrado");
		}
		await this.userRepository.destroy(id);
		return { message: "Usuário deletado com sucesso" };
	};
}
