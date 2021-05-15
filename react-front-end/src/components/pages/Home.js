import React from "react";
import "../../App.css";
import Cards from "../show/Cards";
import HeroSection from "../HeroSection";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
