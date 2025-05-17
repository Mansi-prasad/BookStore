import React from "react";
export const About = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          About Our Bookstore
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-indigo-600">Read & Buy</span>,
          your online destination for discovering, reading, and purchasing books
          you love. Our platform brings together passionate readers and a
          curated collection of books across all genres.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10 text-left">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
              Read Anywhere
            </h2>
            <p className="text-gray-600">
              Enjoy instant access to e-books from any device. Our intuitive
              reader offers a seamless reading experience — whether you're at
              home or on the go.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
              Buy With Ease
            </h2>
            <p className="text-gray-600">
              Find books you'll love and purchase them securely through our
              streamlined checkout process. Delivered to your door or downloaded
              instantly.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-gray-700 text-base">
            We believe books have the power to transform lives. Whether you're a
            casual reader or a devoted bibliophile, we're here to support your
            journey.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Happy reading, and thank you for being part of our community! 📖
          </p>
        </div>
      </div>
    </div>
  );
};
