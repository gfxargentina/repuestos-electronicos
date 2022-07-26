import React from 'react';

const PartsCard = (item) => {
  // const {
  //   imagen: { url },
  // } = item;
  // console.log(url);

  return (
    <>
      <article className="shadow-md bg-white rounded-3xl p-5 mt-5">
        <img src="" alt="" srcset="" />
        <img
          src={item.imagen.url}
          alt=""
          loading="lazy"
          className="h-52 w-full object-cover rounded-3xl md:h-80"
        />

        <article className="flex items-center justify-between">
          <div className="pt-5">
            <h1 className="font-bold">{item.repuesto}</h1>
            <ul>
              <li>{item.repuesto}</li>
              <li>creada el 13/07/22</li>
            </ul>
          </div>

          <div>
            <ul className="text-slate-600 text-sm text-right">
              <li>3 recomendaciones</li>
            </ul>
          </div>
        </article>
      </article>
    </>
  );
};

export default PartsCard;
