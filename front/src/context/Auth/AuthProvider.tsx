import { ReactNode, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { LoginForm, RegisterForm } from "../../types/form-types";
import { AxiosError } from "axios";

interface AuthProviderProps {
	children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");
	const [error, setError] = useState<string>("");
	const navigate = useNavigate();

	async function Login(formInputs: LoginForm) {
		try {
			const response = await api.post("/auth/login", formInputs);
			const { token, user, message } = response.data;
			localStorage.setItem("token", token);
			setIsAuthenticated(true);
			navigate(`/home/${user.id}`, { replace: true });
			setMessage("Logado com sucesso!");
			setError("");
		} catch (err: any) {
			setError(err);
		}
	}

	async function Register(formInputs: RegisterForm) {
		try {
			const response = await api.post("/auth/register", formInputs);
			const { message } = response.data;
			setMessage(message);
			setError("");
		} catch (err) {
			const axiosError = err as AxiosError<ApiError>;
			setError(axiosError.response?.data.message || "Erro ao registrar");
			setMessage(""); // Clear previous messages
		}
	}

	function Logout() {
		localStorage.removeItem("token");
		setIsAuthenticated(false);
		navigate("/", { replace: true });
		setMessage("Desconectado com sucesso");
		setError(""); // Clear previous errors
	}

	return (
		<AuthContext.Provider
			value={{ Login, Register, Logout, isAuthenticated, message, error }}
		>
			{children}
		</AuthContext.Provider>
	);
}
