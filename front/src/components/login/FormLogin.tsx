import { ChangeEvent } from "react";

interface AuthFormProps {
	isRegister: boolean;
	email: string;
	password: string;
	name: string;
	setEmail: (value: string) => void;
	setPassword: (value: string) => void;
	setName: (value: string) => void;
}

export function AuthForm({
	isRegister,
	email,
	password,
	name,
	setEmail,
	setPassword,
	setName,
}: AuthFormProps) {
	return (
		<form className="flex flex-col w-full gap-6">
			<fieldset className="flex flex-col gap-6">
				{isRegister && (
					<input
						type="text"
						className="bg-color-menta h-[35px] px-4 rounded"
						placeholder="Nome"
						value={name}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setName(e.target.value)
						}
						required
					/>
				)}
				<input
					type="email"
					className="bg-color-menta h-[35px] px-4 rounded"
					placeholder="Email"
					value={email}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setEmail(e.target.value)
					}
					required
				/>
				<input
					type="password"
					className="bg-color-menta h-[35px] px-4 rounded"
					placeholder="Senha"
					value={password}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setPassword(e.target.value)
					}
					required
				/>
				<button className="bg-green-second mt-8 p-[8px] text-xl text-white rounded-xl flex justify-center items-center gap-4 uppercase font-semibold hover:bg-green-800 transition-all duration-200">
					{isRegister ? "Cadastrar" : "Entrar"}
					<img src={arrowRight} alt="Arrow Right" className="w-6 h-auto" />
				</button>
			</fieldset>
		</form>
	);
}
