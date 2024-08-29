import { UserRepository } from "@modules/user/user.repository";
import { createUserDTO } from "@modules/user/userDTO";
import { BadRequest, NotFound, Unauthorized } from "@utils/api-error";
import { hasher } from "@utils/hasher";
import { jwtHelper } from "@/utils/generate-token";
import { signupAuthDTO, singinAuthDTO } from "./authDTO";
import { loginSchema, registerSchema } from "./auth.schema";

export class AuthService {
	constructor(private userRepository: UserRepository) {}

	signUp = async (data: createUserDTO) => {
		const existingUser = await this.userRepository.getBy({ email: data.email });

		if (existingUser) {
			throw new BadRequest("Este usuário já existe");
		}
		const payload = await registerSchema.validate(data);
		payload.password = await hasher.makeHash(payload.password);
		await this.userRepository.create(payload);
		return { message: "Usuário criado com sucesso" };
	};

	signIn = async (data: singinAuthDTO) => {
		const payload = await loginSchema.validate(data);
		const user = await this.userRepository.getBy({ email: payload.email });

		if (!user) {
			throw new NotFound("Usuário não encontrado");
		}

		const verifyCredentials = await hasher.comparePassword(
			payload.password,
			user.password,
		);

		if (!verifyCredentials) {
			throw new Unauthorized("Credenciais inválidas");
		}

		const token = jwtHelper.generateToken(user.id);

		return { id: user.id, token };
	};
}
