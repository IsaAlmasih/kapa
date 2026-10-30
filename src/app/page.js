"use client";

import styles from "./styles.module.css";

// import ImageViewer from "react-simple-image-viewer";

import { useCallback, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Link from "next/link";

import logo from "../assets/sharov.png";

import img1 from "../assets/kle1.jpg";
import img2 from "../assets/ke1.jpg";
import img3 from "../assets/kle1.jpg";
import img5 from "../assets/4.jpg";
import img6 from "../assets/5.jpg";
import img7 from "../assets/6.jpg";
import img8 from "../assets/7.jpg";
import img10 from "../assets/8.jpg";
import img11 from "../assets/logo_1k.png";
import img12 from "../assets/11.jpg";
import img13 from "../assets/12.jpg";
import img14 from "../assets/13.jpg";
import img15 from "../assets/10.jpg";
import img16 from "../assets/мкм.jpg";
import img17 from "../assets/13.jpg";
import img18 from "../assets/13.jpg";
import img19 from "../assets/kle9.jpg";

export default function Page() {
  const [expandedId, setExpandedId] = useState(null);
  const router = useRouter();

  const images = [
    img1.src,
    img2.src,
    img3.src,
    img5.src,
    img6.src,
    img7.src,
    img8.src,
    // img9.src,
    img10.src,
    img12.src,
    img13.src,
    img14.src,
    img15.src,
    img16.src,
    img17.src,
    img18.src,
    img19.src,
  ];

  // Первый клик увеличивает изображение, повторный — возвращает исходный размер
  const handleClick = (id) => {
    setExpandedId((currentId) => (currentId === id ? null : id));
  };

  return (
    <main className={styles.wrapper}>
      <h1>Смысловое название</h1>
      <div className={styles.wrap}>
        <div className={styles.wrapGrid}>
          {images.map((image, index) => {
            const id = String(index + 1);
            const isExpanded = expandedId === id;

            return (
              <Image
                key={id}
                src={image}
                alt={`Фото ${id}`}
                width={200}
                height={200}
                className={`${styles.image} ${
                  isExpanded ? styles.imageExpanded : ""
                }`}
                onClick={() => handleClick(id)}
              />
            );
          })}
        </div>
        {/* В Next.js для возврата на предыдущую страницу используется router.back() */}
        <button
          type="button"
          onClick={() => router.back()}
          className={styles.button}
        >
          {"<--"} Назад
        </button>
      </div>
    </main>
  );
}
