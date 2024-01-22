import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage";
import Header from "./components/header/header";
import Profile from "./components/profile/profile";

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
