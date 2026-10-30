"use client";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import img1 from "../assets/kle1.jpg";
import img2 from "../assets/ke1.jpg";
import img3 from "../assets/kle1.jpg";
import img5 from "../assets/4.jpg";
import img6 from "../assets/5.jpg";
import img7 from "../assets/6.jpg";
import img8 from "../assets/7.jpg";
import img10 from "../assets/8.jpg";
import img12 from "../assets/11.jpg";
import img13 from "../assets/12.jpg";
import img14 from "../assets/13.jpg";
import img15 from "../assets/10.jpg";
import img16 from "../assets/мкм.jpg";
import img17 from "../assets/13.jpg";
import img18 from "../assets/13.jpg";
import img19 from "../assets/kle9.jpg";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(null);
  const router = useRouter();

  const images = [
    img1.src,
    img2.src,
    img3.src,
    img5.src,
    img6.src,
    img7.src,
    img8.src,
    img10.src,
    img12.src,
    img13.src,
    img14.src,
    img15.src,
    img16.src,
    img17.src,
    img18.src,
    // img19.src,
  ];

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const closeViewer = () => {
    setActiveIndex(null);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]); // Обработчики используют актуальный индекс через обновление состояния

  return (
    <>
      <div className={styles.wrapper}>
        <h1>Моё творчество</h1>
        <div className={styles.wrap}>
          <div className={styles.wrapGrid}>
            {images.map((image, index) => (
              <Image
                key={`${image}-${index}`}
                src={image}
                alt={`Фото ${index + 1}`}
                width={200}
                height={200}
                className={styles.image}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => router.back()}
            className={styles.button}
          >
            {"<--"} Назад
          </button>
        </div>

        {activeIndex !== null && (
          <div
            className={styles.viewer}
            onClick={closeViewer}
            role="dialog"
            aria-modal="true"
            aria-label="Просмотр фотографий"
          >
            <button
              type="button"
              className={`${styles.viewerArrow} ${styles.viewerArrowLeft}`}
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Предыдущая фотография"
            >
              &#10094;
            </button>

            <div
              className={styles.viewerContent}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt={`Фото ${activeIndex + 1}`}
                width={1200}
                height={900}
                className={styles.viewerImage}
                priority
              />

              <div className={styles.viewerCounter}>
                {activeIndex + 1} / {images.length}
              </div>
            </div>

            <button
              type="button"
              className={`${styles.viewerArrow} ${styles.viewerArrowRight}`}
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Следующая фотография"
            >
              &#10095;
            </button>

            <button
              type="button"
              className={styles.viewerClose}
              onClick={(event) => {
                event.stopPropagation();
                closeViewer();
              }}
              aria-label="Закрыть просмотр"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </>
  );
}
