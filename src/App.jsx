import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import CEONote from "./components/CEONote";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Header />
      <About />
      <CEONote />
      <Products />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;

