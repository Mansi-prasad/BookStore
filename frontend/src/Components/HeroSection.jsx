import React from "react";

export const HeroSection = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col justify-between items-center md:gap-40 md:flex-row">
      <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
        <div className="space-y-9">
          <h1 className="text-4xl font-bold">
            Hello, Welcome here to learn{" "}
            <span className="text-blue-500">something new everyday!!</span>
          </h1>
          <p className="text-xl flex justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est neque
            aspernatur voluptatibus nemo vel recusandae architecto reiciendis
            sapiente consequuntur incidunt voluptas expedita sit laboriosam,
            accusantium.
          </p>
          <label className="input validator w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              className="ml-2 bg-transparent border-none outline-none focus:border-none focus:outline-none"
              type="email"
              placeholder="mail@site.com"
              required
            />
          </label>
        </div>
        <button className="bg-blue-500 px-3 py-2 rounded-sm mt-6 text-white mb-2">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-1/2 order-1">
        <img className="w-120 h-120" src="../../public/banner2.avif" alt="" />
      </div>
    </div>
  );
};
