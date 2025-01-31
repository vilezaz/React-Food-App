import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FvtPage from "./Pages/FvtPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import Footer from "./Components/Footer";
import FoodsPage from "./Pages/FoodsPage";
import { Toaster } from "react-hot-toast";
import CheckoutPage from "./Pages/CheckoutPage";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Toaster />
      <Navbar className="flex-shrink-0" />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/foods" element={<FoodsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/favourites" element={<FvtPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
      <Footer className="flex-shrink-0" />
    </div>
  );
};

export default App;