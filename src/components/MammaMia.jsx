import React from "react";
import NavBar from "./NavBar";
import Home from "../views/Home";
import Car from "../views/Car";
import PizzaDetail from "../views/PizzaDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function MammaMia() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car" element={<Car />} />
        <Route path="/DetallesPizza/:id" element={<PizzaDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
