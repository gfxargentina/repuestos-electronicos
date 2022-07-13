import React from "react";
import PartsCard from "../components/PartsCard";

const data = [
  {
    id: 0,
    title: "Placas Main",
    img: "https://res.cloudinary.com/dgeysldss/image/upload/v1656722834/repuestos/zz0tpdhveakdgpk57bx4.jpg",
  },
  {
    id: 1,
    title: "Fuentes",
    img: "https://res.cloudinary.com/dgeysldss/image/upload/v1656722834/repuestos/zz0tpdhveakdgpk57bx4.jpg",
  },
  {
    id: 2,
    title: "Placas T-Con",
    img: "https://res.cloudinary.com/dgeysldss/image/upload/v1656722834/repuestos/zz0tpdhveakdgpk57bx4.jpg",
  },
  {
    id: 3,
    title: "Tiras Led",
    img: "https://res.cloudinary.com/dgeysldss/image/upload/v1656722834/repuestos/zz0tpdhveakdgpk57bx4.jpg",
  },
  {
    id: 4,
    title: "Displays",
    img: "https://res.cloudinary.com/dgeysldss/image/upload/v1656722834/repuestos/zz0tpdhveakdgpk57bx4.jpg",
  },
  {
    id: 5,
    title: "Remotos",
    img: "https://res.cloudinary.com/dgeysldss/image/upload/v1656722834/repuestos/zz0tpdhveakdgpk57bx4.jpg",
  },
];

const LastParts = () => {
  return (
    <section className="container mx-auto px-5">
      <h1 className="font-bold text-4xl text-center">
        Ultimos Repuestos agregados
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
        {data.map((item) => (
          <PartsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default LastParts;
