import { PrimeReactProvider } from "primereact/api";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth/AuthProvider.tsx";
import "./index.css";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import { RoutePages } from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<PrimeReactProvider>
				<AuthProvider>
					<RoutePages />
				</AuthProvider>
			</PrimeReactProvider>
		</BrowserRouter>
	</StrictMode>,
);
