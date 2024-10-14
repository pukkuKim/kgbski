import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/index.css";
import App from "./components/App";
import Hero from "./components/Hero";
import "semantic-ui-css/semantic.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<Routes>
			<Route path="/" element={<Hero />} />
			<Route path="/home" element={<App />} />
		</Routes>
	</Router>
);
