"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/carousel/Carousel";
import MainImage from "@/components/mainImage/MainImage";
import Recommends from "@/components/recomends /Recommends";

export default function Home() {
  return (
    <>
      <MainImage />
      <Carousel />
      <Recommends />
    </>
  );
}
