import { RegisterForm } from "@/types/form-data";
import { ArrowRight } from "lucide-react";
import React, { FormEvent } from "react";

interface AuthFormProps {
	isRegister: boolean;
	handleSubmit: (e: FormEvent) => void;
	formData: RegisterForm;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	toggleRegister: () => void;
}

export function AuthForm({
	isRegister,
	handleSubmit,
	formData,
	handleInputChange,
	toggleRegister,
}: AuthFormProps) {
	return (
		<form className="flex flex-col w-full gap-6" onSubmit={handleSubmit}>
			<fieldset className="flex flex-col gap-6">
				{isRegister && (
					<input
						type="text"
						name="name"
						className="bg-color-menta h-[35px] px-4 rounded border-none"
						placeholder="Nome"
						value={formData.name}
						onChange={handleInputChange}
						required
					/>
				)}
				<input
					type="email"
					name="email"
					className="bg-color-menta h-[35px] px-4 rounded border-none"
					placeholder="Email"
					value={formData.email}
					onChange={handleInputChange}
					required
				/>
				<input
					type="password"
					name="password"
					className="bg-color-menta h-[35px] px-4 rounded border-none"
					placeholder="Senha"
					value={formData.password}
					onChange={handleInputChange}
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
				onClick={toggleRegister}
				className="text-zinc-600 text-center cursor-pointer hover:text-green-900 duration-75 transition-all border-green-600"
			>
				{isRegister ? "Já possui uma conta?" : "Ainda não possui uma conta?"}
			</span>
		</form>
	);
}
