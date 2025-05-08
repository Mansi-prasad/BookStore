import React, { useEffect, useState } from "react";
import { BookCard } from "./BookCard";
// import BookList from "../../public/BookList.json";
import { Link } from "react-router-dom";
import axios from "axios";
export const AllBooksDetail = () => {
  const backendURL = "http://localhost:3000/book";
  const [bookdetails, setBookDetails] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(backendURL);
        console.log(res.data);
        setBookDetails(res.data);
      } catch (error) {
        console.log("An error occure to fetch the book details", error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-24 items-center justify-center text-center">
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
          {bookdetails.map((item) => {
            return <BookCard item={item} key={item._id} />;
          })}
        </div>
      </div>
    </>
  );
};
