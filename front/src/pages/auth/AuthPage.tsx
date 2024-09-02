import { AuthContext } from "@/context/auth/AuthContext";
import Logo from "@assets/poupe_dark.svg";
import uxLogo from "@assets/uxLogo.svg";
import { FormEvent, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthForm } from "./components/AuthForm";

export function AuthPage() {
	const [isRegister, setIsRegister] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const { Login, Register } = useContext(AuthContext);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const { name, email, password } = formData;
		const action = isRegister
			? Register({ name, email, password })
			: Login({ email, password });

		toast.promise(action, {
			loading: isRegister ? "Registrando..." : "Logando...",
			success: isRegister
				? "Registrado com sucesso! Faça login para entrar"
				: "Logado com sucesso!",
			error: (err) => `Erro: ${err.message}`,
		});

		setFormData({ name: "", email: "", password: "" });
	};

	const toggleRegister = () => setIsRegister((prev) => !prev);

	return (
		<>
			<Toaster />
			<main
				className={`h-screen w-screen bg-green-main max-sm:bg-[url(./assets/ilustration.svg)] bg-contain flex ${
					isRegister ? "flex-row-reverse" : ""
				} overflow-hidden max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center`}
			>
				<div className="w-1/2 max-sm:w-full flex justify-center">
					<article className="bg-white max-sm:shadow-2xl max-sm:mr-5 max-sm:ml-5 h-auto flex flex-col items-center p-8 gap-8 justify-center size-[26rem] rounded-xl md:place-self-center">
						<img src={Logo} alt="Logo" className="w-24 h-auto" />
						<h2 className="text-3xl text-[#858585] font-bold text-center">
							Faça seu {isRegister ? "cadastro" : "login"}
						</h2>
						<AuthForm
							isRegister={isRegister}
							handleSubmit={handleSubmit}
							formData={formData}
							handleInputChange={handleInputChange}
							toggleRegister={toggleRegister}
						/>
					</article>
				</div>

				<div
					className={`bg-[url(./assets/ilustration.svg)] w-1/2 bg-cover bg-no-repeat flex ${
						isRegister ? "justify-start" : "justify-end"
					} items-end max-sm:hidden`}
				>
					<img src={uxLogo} alt="UX Logo" className="m-8 md:m-12 w-24 h-auto" />
				</div>
			</main>
		</>
	);
}
