import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

interface AuthFormProps {
	isRegister: boolean;
	setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AuthForm({ isRegister, setIsRegister }: AuthFormProps) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
	};

	return (
		<form className="flex flex-col w-full gap-6" onSubmit={handleSubmit}>
			<fieldset className="flex flex-col gap-6">
				{isRegister && (
					<input
						type="text"
						className="bg-color-menta h-[35px] px-4 rounded"
						placeholder="Nome"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				)}
				<input
					type="email"
					className="bg-color-menta h-[35px] px-4 rounded"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					className="bg-color-menta h-[35px] px-4 rounded"
					placeholder="Senha"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</fieldset>
			<button
				type="submit"
				className="bg-green-second mt-8 p-[8px] text-xl text-white rounded-xl flex justify-center items-center gap-4 uppercase font-semibold hover:bg-green-800 transition-all duration-200"
			>
				{isRegister ? "Cadastrar" : "Entrar"}
				<ArrowRight />
			</button>
			<span
				onClick={() => setIsRegister(!isRegister)}
				className="text-zinc-600 text-center cursor-pointer hover:text-green-900 duration-75 transition-all border-green-600"
			>
				{isRegister ? "Já possui uma conta?" : "Ainda não possui uma conta?"}
			</span>
		</form>
	);
}
