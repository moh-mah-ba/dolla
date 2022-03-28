import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SingninPage from "./pages/signin";

function App() {
  return (
    <Router className="App">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SingninPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
