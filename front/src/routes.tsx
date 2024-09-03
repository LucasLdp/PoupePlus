import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/auth/AuthPage";
import { NotFound } from "./pages/errors/NotFound";
import { HomePage } from "./pages/home/HomePage";

export function RoutePages() {
	return (
		<Routes>
			<Route path="/" element={<AuthPage />} />
			<Route path="/home/:id" element={<HomePage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
