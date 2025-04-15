import React from "react";

export const BookCard = ({ item }) => {
  return (
    <div>
      <div className="card bg-base-100 w-80 shadow-sm mt-6 hover:scale-105 duration-200">
        <figure >
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title}
            <div className="bg-blue-500 rounded-sm text-white px-2 py-1 text-sm">
              {item.category}
            </div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">Rs. {item.price}</div>
            <div className="badge badge-outline px-4 py-4 hover:bg-blue-500 hover:text-white duration-200">
              But Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
