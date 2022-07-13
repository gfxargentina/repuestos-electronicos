import React from "react";
import PartsCard from "../components/PartsCard";

const data = [
  {
    id: 0,
    user: "Charly Garcia",
    title: "Main Samsung 32",
    img: "https://images.unsplash.com/photo-1586920740199-47ce35183cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
  },
  {
    id: 1,
    user: "Gustavo Cerati",
    title: "Fuente Sanyo 42",
    img: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    user: "Fabiana Cantilo",
    title: "T-Con Sansei 40",
    img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    user: "Leon Gieco",
    title: "Tiras Led Philips 50",
    img: "https://images.unsplash.com/photo-1586920740280-e7da670f7cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 4,
    user: "Mercedes Sosa",
    title: "Display Samsung 43",
    img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    id: 5,
    user: "Indio Solari",
    title: "IR Pioneer 32",
    img: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const LastParts = () => {
  return (
    <section className="container mx-auto px-5 mb-5">
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
