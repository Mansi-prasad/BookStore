import React from "react";
import { BookCard } from "./BookCard";
import BookList from "../../public/BookList.json";
import { Link } from "react-router-dom";
export const AllBooksDetail = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are Delighted to have you
            <span className="text-blue-500"> Here!</span>
          </h1>
          <p className="mt-12 mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit,
            quam facilis dolor ipsam fuga at ratione nulla expedita magnam.
          </p>
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            to="/"
          >
            Back
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-20 ">
          {BookList.map((item) => {
            return <BookCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};
