import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import BookList from "../../../public/BookList.json";
export const Courses = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-26 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are Delighted to have you
            <span className="text-blue-500"> Here!</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit,
            quam facilis dolor ipsam fuga at ratione nulla expedita magnam.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
