import React from "react";
import { Link } from "react-router-dom";
import { Login } from "./Login";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className=" w-105 mx-auto relative top-40 border rounded-md px-10 py-7 dark:bg-slate-900 dark:text-white">
          <form action="">
            <Link
              to="/"
              className="btn btn-sm btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-center text-3xl">Register</h3>
            <div>
              <p className="py-4">Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-sm py-1.5 px-2"
              />
            </div>
            <div>
              <p className="py-4">Email</p>
              <input
                type="email"
                placeholder="mail@gmail.com"
                className="w-full border rounded-sm py-1.5 px-2"
              />
            </div>
            <div>
              <p className="py-4">Password</p>
              <input
                type="text"
                placeholder="Enter password"
                className="w-full border rounded-sm py-1.5 px-2"
              />
            </div>
            <button className="border-none rounded-sm py-2 px-6 mt-6 mb-4 bg-blue-600 text-white">
              Register
            </button>
            <p>
              Already have an account?
              <button
                className="text-blue-600"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
            </p>
            <Login />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
