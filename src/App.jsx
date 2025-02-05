import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FvtPage from "./Pages/FvtPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import CartPage from "./Pages/CartPage";
import Footer from "./Components/Footer";
import FoodsPage from "./Pages/FoodsPage";
import { Toaster } from "react-hot-toast";
import CheckoutPage from "./Pages/CheckoutPage";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { setUser } from "./Store/Slices/Auth";

const App = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user);
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          username: user.displayName
        }));
        navigate("/");
      } else {
        console.log("No user is signed in");
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
      <Footer className="flex-shrink-0" />
    </div>
  );
};

export default App;