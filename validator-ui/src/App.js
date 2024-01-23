import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import React from "react";
import Homepage from "./pages/homepage";
import Profile from "./pages/profile/Profile";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</Router>
	);
}

export default App;
