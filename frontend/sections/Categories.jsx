import React from "react";
import CategoryCard from "../components/CategoryCard";

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

//TODO: poner link a las imagenes que lleven a cada categoria

const Categories = () => {
  return (
    <div className="max-w-5xl mx-auto ">
      <div className="flex flex-wrap gap-4">
        {data.map((item) => (
          <CategoryCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
