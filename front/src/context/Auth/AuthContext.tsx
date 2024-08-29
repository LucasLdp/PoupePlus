import { createContext } from "react";
import { LoginForm, RegisterForm } from "../../types/form-types";

interface AuthContextStates {
	message: string;
	isAuthenticated: boolean;
	Register: (formInputs: RegisterForm) => Promise<void>;
	Login: (formInputs: LoginForm) => Promise<void>;
	Logout: () => void;
}

export const AuthContext = createContext<AuthContextStates>({
	message: "",
	isAuthenticated: false,
	Register: async () => Promise.resolve(),
	Login: async () => Promise.resolve(),
	Logout: () => {},
});
