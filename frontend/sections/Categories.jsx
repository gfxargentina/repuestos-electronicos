import React from "react";
import CategoryCard from "../components/CategoryCard";

const data = [
  {
    id: 0,
    title: "Placas Main",
    img: "https://images.unsplash.com/photo-1586920740199-47ce35183cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
  },
  {
    id: 1,
    title: "Fuentes",
    img: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    title: "Placas T-Con",
    img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    title: "Tiras Led",
    img: "https://images.unsplash.com/photo-1586920740280-e7da670f7cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 4,
    title: "Displays",
    img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    id: 5,
    title: "Remotos",
    img: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

//TODO: poner link a las imagenes que lleven a cada categoria

const Categories = () => {
  return (
    <div className="container mx-auto ">
      <h1 className="text-4xl text-center">Categorias</h1>
      <div className="grid grid-cols-5 justify-center gap-4">
        {data.map((item) => (
          <CategoryCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
