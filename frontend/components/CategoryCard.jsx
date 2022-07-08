import React from "react";

import main from "../img/placa-main2.jpg";

const CategoryCard = () => {
  return (
    <div className="max-w-sm mt-5 mb-5">
      <a className="relative block bg-black group rounded-lg" href="">
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
          src="https://res.cloudinary.com/dgeysldss/image/upload/v1656722834/repuestos/zz0tpdhveakdgpk57bx4.jpg"
          alt="placa main de televisor"
        />
        <div className="relative p-8">
          <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
            Developer
          </p>

          <p className="text-2xl font-bold text-white">Placas Main</p>

          <div className="mt-64">
            <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates
                doloremque reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CategoryCard;
