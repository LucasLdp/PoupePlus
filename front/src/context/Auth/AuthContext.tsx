import { createContext } from "react";
import { LoginForm, RegisterForm } from "../../types/form-data";

interface AuthContextStates {
	isAuthenticated: boolean;
	Register: (formInputs: RegisterForm) => Promise<any>;
	Login: (formInputs: LoginForm) => Promise<any>;
	Logout: () => void;
}

export const AuthContext = createContext<AuthContextStates>({
	isAuthenticated: false,
	Register: async () => Promise.resolve(),
	Login: async () => Promise.resolve(),
	Logout: () => {},
});
