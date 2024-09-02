import { api } from "@/services/api";
import { AxiosError } from "axios";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm, RegisterForm } from "../../types/form-types";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
	children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const navigate = useNavigate();

	function handleApiError(error: unknown) {
		if (error instanceof AxiosError) {
			throw new Error(error.response?.data.message || "Erro no servidor");
		} else {
			throw new Error("Erro desconhecido");
		}
	}

	async function Login(formInputs: LoginForm) {
		try {
			const { data } = await api.post("/auth/login", formInputs);
			const { id, token } = data;
			localStorage.setItem("token", token);
			setIsAuthenticated(true);
			navigate(`/home/${id}`, { replace: true });
		} catch (error) {
			handleApiError(error);
		}
	}

	async function Register(formInputs: RegisterForm) {
		try {
			await api.post("/auth/register", formInputs);
		} catch (error) {
			handleApiError(error);
		}
	}

	function Logout() {
		localStorage.removeItem("token");
		setIsAuthenticated(false);
		navigate("/", { replace: true });
	}

	return (
		<AuthContext.Provider value={{ Login, Register, Logout, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
}
