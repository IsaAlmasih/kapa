"use client";

import React from "react";

import styles from "../about/styles.module.css";

import image1 from "../../assets/kle1.jpg";
import image2 from "../../assets/kle1.jpg";
import image3 from "../../assets/kle1.jpg";
import image4 from "../../assets/kle1.jpg";
import image5 from "../../assets/kle1.jpg";
import image6 from "../../assets/kle1.jpg";
import image7 from "../../assets/kle1.jpg";
import image8 from "../../assets/kle1.jpg";
import image9 from "../../assets/kle1.jpg";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleClick = (id) => {
    const element = document.getElementById(`item-${id}`);
    if (!element) return;

    if (element.classList.contains("expanded")) {
      element.classList.remove("expanded");
    } else {
      element.classList.add("expanded");
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <div className={styles.wrapp}>Смысловое название.</div>
      <div className={styles.wrapper}>
        <div className={styles.wrapGrid}>
        <img
          src={image1.src}
          alt=""
          id="item-1"
          width={400}
          height={250}
          onClick={() => handleClick("1")}
        />{" "}
        <img
          src={image2.src}
          alt=""
          id="item-2"
          width={400}
          height={250}
          onClick={() => handleClick("2")}
        />{" "}
        <img
          src={image3.src}
          alt=""
          id="item-3"
          width={400}
          height={250}
          onClick={() => handleClick("3")}
        />{" "}
        <img
          src={image4.src}
          alt=""
          id="item-4"
          width={400}
          height={250}
          onClick={() => handleClick("4")}
        />{" "}
        <img
          src={image5.src}
          alt=""
          id="item-5"
          width={400}
          height={250}
          onClick={() => handleClick("5")}
        />{" "}
        <img
          src={image6.src}
          alt=""
          id="item-6"
          width={400}
          height={250}
          onClick={() => handleClick("6")}
        />{" "}
        <img
          src={image7.src}
          alt=""
          id="item-7"
          width={400}
          height={250}
          onClick={() => handleClick("7")}
        />{" "}
        <img
          src={image8.src}
          alt=""
          id="item-8"
          width={400}
          height={250}
          onClick={() => handleClick("8")}
        />{" "}
        <img
          src={image9.src}
          alt=""
          id="item-9"
          width={400}
          height={250}
          onClick={() => handleClick("9")}
        />{" "}
        <button onClick={() => router.back()} className={styles.button}>
          {" "}
          {"<--"}Назад{" "}
        </button>{" "}
      </div>{" "}
    </div>
    </>
  );
};

export default Page;
\









    <div className={styles.wrapper}>
      <div className={styles.intro}>
        {" "}
        {/* <img src={logo.src} /> */}
        {/* Дешевле и быстрей наносить клей нашими машинами. */}
      </div>
      <div className={styles.section}>
        <div className={styles.contacts}>
          <p>
            {/* <a
              href={
                "https://www.google.com/maps/search/119071,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20%D1%83%D0%BB%20%D0%9E%D1%80%D0%B4%D0%B6%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8%D0%B4%D0%B7%D0%B5,%2010,"
              }
            >
              119071, Москва, Наши координаты. (ТЦ "ГРАЙ" второй
              этаж)
            </a> */}
          </p>
          <p>
            Тел: <a href={"tel:+0000000"}>+7(0000)00-00-00 (WhatsApp)</a>
          </p>
          <p>
            email:
            <a href={"000:info@0000-000.com"}> 000@000.ru</a>
          </p>
        </div>
        <div className={styles.about}>
          <h2>Добро пожаловать на наш сайт! Кто мы?</h2>
          {/* <p>
            Мы производственная компания SHAROV technologies. Занимаемся
            разработкой и изготовлением оборудования. Основная наша продукция:
            КЛЕЕМАЗАТЕЛЬНЫЕ МАШИНЫ. Наши машины работают от Сахалина до
            Калининграда. В том числе и за рубежом: Казахстан, Киргизия,
            Таджикистан, Белоруссия, Украина, Испания.
          </p> */}
          {/* <ul>
            <li>
              Мы разрабатываем и постоянно совершенствуем наше оборудование.
            </li>
            <li>
              Используем самые современные материалы и технологии при
              изготовлении продукции.
            </li>
            <li>
              Осуществляем техническую и консультационную поддержку наших
              клиентов.
            </li>
          </ul> */}
        </div>
        {/* <div className={styles.photos}>
          {images.map((src, index) => (
            <img
              src={src}
              onClick={() => openImageViewer(index)}
              width="300"
              key={index}
              style={{ margin: "2px" }}
              alt=""
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              onClose={closeImageViewer}
              disableScroll={false}
              backgroundStyle={{
                backgroundColor: "rgba(0,0,0,0.9)",
              }}
              style={{
                padding: "60px",
              }}
              closeOnClickOutside={true}
            />
          )}
        </div> */}
        <div className={styles.about}>
          {/* <h2>Клеемазательные машины: МКМ39 и МКМ59</h2> */}
          {/* <p>
            Клеемазательная машина МКМ39 осуществляет нанесение клея на
            материалы типа бумага, картон, бумвинил, искусственная и натуральная
            кожа, и др. материалы. В работе применяется «холодный» клей типа
            ПВА. Ширина вала 39 см. Машина с электроприводом имеет регулировку
            скорости вращения вала и толщины нанесения клея. Детали машины
            практически полностью выполнены из нержавеющей стали. Машина
            разработана нашей компанией с использованием оригинальных
            инновационных технических решений, имеет простую и очень надежную
            конструкцию. Конструкция МКМ59 аналогична МКМ39, с той лишь
            разницей, что увеличена ширина нанесения клея.
          </p> */}
        </div>
        {/* <div className={styles.aboutTex}>
          <h3>Технические характеристики:</h3>
          <ul>
            <li>Рабочая ширина: МКМ39 – 390 – 590 мм.</li>
            <li>Расположение клеевого аппарата – нижнее</li>
            <li>Загрузка/приёмка листов – вручную</li>
            <li>Электропитание – 220В</li>
            <li>Габариты – 580х250х130</li>
            <li>Вес: МКМ39– 10 кг., МКМ59 – 12 кг.</li>
            <li>Цена: МКМ39 — 57000 руб., МКМ59 — 65000 руб.</li>
          </ul>
        </div> */}
        {/* <div className={styles.video}>
          <h2>Видео инструкция.</h2>
          <iframe
            title="28 декабря 2021 г."
            width="750"
            height="422"
            src="https://www.youtube.com/embed/Qx5B9isjumQ?feature=oembed"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            title="9 октября 2021 г."
            width="750"
            height="422"
            src="https://www.youtube.com/embed/cPrfIAsJZFw?feature=oembed"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            title="Клеемазательная машина made in RUSSIA"
            width="750"
            height="422"
            src="https://www.youtube.com/embed/VxbTsAnSNwk?feature=oembed"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div> */}
        {/* <div className={styles.video}>
          <h2>Машина в работе</h2>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/59ed7d58c1b327282743d5f1a12da5e2/"
            allow="clipboard-write; autoplay"
          ></iframe>
        </div> */}
        {/* <div className={styles.video}>
          <h2>Загиб клапанов</h2>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/cb0d52ef97865933fe6f6a289fb29242/"
            allow="clipboard-write; autoplay"
          ></iframe>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/a8ba3e3ee71420219c642c4715dad14f/"
            allow="clipboard-write; autoplay"
          ></iframe>
        </div> */}
        {/* <div className={styles.feedback}>
          <h2>Наше сообщество.</h2>
          <Link href="https://1copy.ru/">
            <Image src={img11} width={250} height={50} alt="logo" />
          </Link>
        </div> */}
        {/* <div className={styles.feedback}></div> */}
        {/* <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A590e57a4b7be241dc451428b14f86ef59816a8888cea70038fb858f36b1a71e4&amp;source=constructor"
          width="100%"
          height="400"
          frameBorder="0"
        ></iframe> */}
        {/* Подвал */}
        <footer className={styles.footer}>
          {/*Препроцессор. Что это */}

          {/* Stylus, ++++(SASS/SCSS) - надо разобрать!!!!! */}

          {/* БЭМ - методология БЛОК-ЭЛЕМЕНТ-МОДИФИКАТОР */}
          {/* <footer className="footer">
                <div className="footer__col">
                    <a className="footer__col-link footer__col-link_active">
                    </a>
                    <a className="footer__col-link">
                    </a>
                    <a className="footer__col-link">
                    </a>
                </div>
          </footer> */}

          {/* Левая колонка */}
          <div className={styles.footerCol}>
            <a href="\">
              <Image
                className={styles.footerLogo}
                src={img16}
                width={60}
                height={50}
                alt="logo"
              />
            </a>
            <h3 className={styles.footerHeading}>Реквизиты например :</h3>
            <div className={styles.footerGroup}>
              <p className={styles.footerText}>ИНН 0000</p>
              <p className={styles.footerText}>КПП 00000</p>
              <p className={styles.footerText}>БИГ БАНКА 0000</p>
              <p className={styles.footerText}>РАСЧЁТНЫЙ СЧЕТ 000000</p>
              <p className={styles.footerText}>КОР СЧЕТ 000000</p>
              <p className={styles.footerText}>ТЕЛ: +7(000)0000-00-00</p>
            </div>
          </div>

          {/* Правая колонка */}
          {/* <div className={styles.footerCol}>
            <a href={"/"}>SEO Продвижение.</a>
          </div> */}
        </footer>
      </div>
    </div>
  );#   k a p a  
 