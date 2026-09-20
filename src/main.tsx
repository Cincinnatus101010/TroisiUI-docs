import "@iantroisi/ui/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./docs.css";

const routerBase =
	import.meta.env.BASE_URL === "/"
		? undefined
		: import.meta.env.BASE_URL.replace(/\/$/, "");

const rootEl = document.getElementById("root");
if (!rootEl) {
	throw new Error("Missing #root element");
}

createRoot(rootEl).render(
	<StrictMode>
		<BrowserRouter basename={routerBase}>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
