import React from "react";

const PartsCard = (props) => {
  return (
    <>
      <article className="shadow-md bg-white rounded-3xl p-5 mt-5">
        <img
          src={props.img}
          alt=""
          loading="lazy"
          className="h-52 w-full object-cover rounded-3xl md:h-80"
        />

        <article className="flex items-center justify-between">
          <div className="pt-5">
            <h1 className="font-bold">{props.title}</h1>
            <ul>
              <li>{props.user}</li>
              <li>creada el 13/07/22</li>
            </ul>
          </div>

          <div>
            <ul className="text-slate-600 text-sm text-right">
              <li>3 me gusta</li>
            </ul>
          </div>
        </article>
      </article>
    </>
  );
};

export default PartsCard;
