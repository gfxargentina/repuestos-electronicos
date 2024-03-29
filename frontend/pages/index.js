import Head from "next/head";
import Image from "next/image";
import BannerProtection from "../components/BannerProtection";
import Hero from "../components/Hero";
import Categories from "../sections/Categories";
import LastParts from "../sections/LastParts";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <BannerProtection />
      <Categories />
      <LastParts />
    </div>
  );
}
