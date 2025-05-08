import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { HeroSection } from "../HeroSection";
import { FreeBook } from "../FreeBook";
export const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <FreeBook />
      <Footer />
    </>
  );
};
