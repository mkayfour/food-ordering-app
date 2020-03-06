import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Order from "./components/products/Order";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Order />
    </div>
  );
}

export default App;
