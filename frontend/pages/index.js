import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Categories from "../sections/Categories";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
    </div>
  );
}
