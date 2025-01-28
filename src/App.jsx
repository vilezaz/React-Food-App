import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FvtPage from "./Pages/FvtPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import FoodsPage from "./Pages/Foods";

const App = () => {
  return (
    <div className="md:w-[85%] mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<FoodsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/favourites" element={<FvtPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
