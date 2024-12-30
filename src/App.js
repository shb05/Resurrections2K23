import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./container";
import { Navbar } from "./components";
import Home from "./Pages/Home";
import Sponsors from "./Pages/Sponsors/Sponsors";
import Team from "./Pages/Teams/Team";
import Events from "./Pages/Events/Events";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Sponsors" exact element={<Sponsors />} />
        <Route path="/Team" exact element={<Team />} />
        <Route path="/Events" exact element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
