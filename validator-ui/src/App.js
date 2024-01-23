import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import React from "react";
import Header from "./components/header/header";
import Homepage from "./pages/homepage";
import Profile from "./pages/profile/profile";

function App() {
	return (
		<Router>
			<Header
				links={[
					{
						name: "Joburi",
						url: "#",
					},
					{
						name: "Companii",
						url: "#",
					},
					{
						name: "Cautare",
						url: "#",
					},
					{
						name: "Despre",
						url: "#",
					},
					{
						name: "Contact",
						url: "#",
					},
					{
						name: "Documentatie",
						url: "#",
					},
				]}
			/>
			<div>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
