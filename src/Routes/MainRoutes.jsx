import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../components/About";
import { CategoryCard } from "../components/CategoryCard";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";
const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:category" element={<CategoryCard />}></Route>
      </Routes>
    </>
  );
};
export { MainRoutes };
