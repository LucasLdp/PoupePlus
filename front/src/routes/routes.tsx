import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/HomePage";
import { Login } from "../pages/login/Login";
import ProtectedRoute from "./PrivateRoutes";

export const router = createBrowserRouter([
	{
		path: "/home/:id",
		element: (
			<ProtectedRoute>
				<Home />
			</ProtectedRoute>
		),
	},
	{
		path: "/",
		element: <Login />,
	},
]);
