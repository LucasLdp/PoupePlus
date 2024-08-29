import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/auth/AuthPage";
import { HomePage } from "./pages/home/HomePage";

export function App() {
	return (
		<Routes>
			<Route path="/" element={<AuthPage />} />
			<Route path="/home" element={<HomePage />} />
		</Routes>
	);
}
