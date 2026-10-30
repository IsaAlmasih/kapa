"use client"; // Компонент использует состояние и обработчики кликов — он должен быть клиентским

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./styles.module.css";

import image1 from "../../assets/kle1.jpg";
import image2 from "../../assets/kle1.jpg";
import image3 from "../../assets/kle1.jpg";
import image4 from "../../assets/kle1.jpg";
import image5 from "../../assets/kle1.jpg";
import image6 from "../../assets/kle1.jpg";
import image7 from "../../assets/kle1.jpg";
import image8 from "../../assets/kle1.jpg";
import image9 from "../../assets/kle1.jpg";

export default function Page() {
  const [expandedId, setExpandedId] = useState(null);
  const router = useRouter();

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  // Первый клик увеличивает изображение, повторный — возвращает исходный размер
  const handleClick = (id) => {
    setExpandedId((currentId) => (currentId === id ? null : id));
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.wrapp}>Смысловое название</h1>

      <div className={styles.wrapper}>
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
