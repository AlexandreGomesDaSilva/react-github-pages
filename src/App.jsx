// @ts-nocheck
import React from "react";
import { Routes, Route } from "react-router-dom";
import "normalize.css";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
