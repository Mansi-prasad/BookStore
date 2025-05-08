import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { AllBooksDetail } from "../AllBooksDetail";
export const Courses = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <div className="fixed top-0 left-0 z-50 ">{/* <Navbar /> */}</div>
      <div className="min-h-screen">
        <AllBooksDetail />
      </div>
      <Footer />
    </div>
  );
};
