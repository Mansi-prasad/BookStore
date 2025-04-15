import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import BookList from "../../../public/BookList.json";
import { AllBooksDetail } from "../AllBooksDetail";
export const Courses = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <AllBooksDetail />
      </div>
      <Footer />
    </>
  );
};
