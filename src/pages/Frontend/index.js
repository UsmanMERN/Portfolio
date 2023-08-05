import React from "react";
import Footer from "../../components/Frontend/Footer/Footer";
import Header from "../../components/Frontend/Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function index() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default index;
