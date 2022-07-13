import React from "react";

import main from "../img/placa-main2.jpg";

const CategoryCard = ({ item }) => {
  return (
    <div className="mt-5 mb-5">
      <div className="max-w-sm relative  rounded-lg shadow-2xl overflow-hidden">
        <img
          className="object-fill h-52"
          src={item.img}
          alt="placa main de televisor"
        />

        <h1 className=" absolute font-semibold  text-xl bg-white hover:bg-blue-600 cursor-pointer p-2 rounded-lg bottom-5 left-5">
          {item.title}
        </h1>
      </div>
    </div>
  );
};

export default CategoryCard;
