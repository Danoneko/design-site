import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import useWindowDimensions from "../hoc/WindowSize";

import abrau1 from "../Images/Portfolio/abrau1.jpg";
import ahtarsk1 from "../Images/Portfolio/ahtarsk1.jpg";
import anapa1 from "../Images/Portfolio/anapa1.jpg";
import armavir1 from "../Images/Portfolio/armavir1.jpg";
import belorechensk1 from "../Images/Portfolio/belorechensk1.jpg";
import belorechensk2 from "../Images/Portfolio/belorechensk2.jpg";
import gelenzhik1 from "../Images/Portfolio/gelenzhik1.jpg";
import kavkazskaya1 from "../Images/Portfolio/kavkazskaya1.jpg";
import krasnodar1 from "../Images/Portfolio/krasnodar1.jpg";
import maikop1 from "../Images/Portfolio/maikop1.jpg";
import sadki1 from "../Images/Portfolio/sadki1.jpg";
import sergievposad1 from "../Images/Portfolio/sergievposad1.jpg";
import sochi1 from "../Images/Portfolio/sochi1.jpg";
import supseh1 from "../Images/Portfolio/supseh1.jpg";
import supseh2 from "../Images/Portfolio/supseh2.jpg";
import surgut1 from "../Images/Portfolio/surgut1.jpg";

const Portfolio = () => {
  const { height } = useWindowDimensions();
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(
      document.getElementsByClassName("portfolio__photos")[0].scrollLeft
    );
  };
  useEffect(() => {
    document
      .getElementsByClassName("portfolio__photos")[0]
      .addEventListener("scroll", handleScroll);
    return () =>
      document
        .getElementsByClassName("portfolio__photos")[0]
        .removeEventListener("scroll", handleScroll);
  }, []);
  function goToElement(e_id) {
    document.getElementsByClassName("portfolio__photos")[0].scrollLeft =
      document.getElementById(e_id).offsetLeft -
      document.getElementsByClassName("portfolio__photos")[0].offsetLeft -
      document.getElementsByClassName("portfolio__photos")[0].clientLeft;
    return false;
  }
  const data = [
    {
      id: "0",
      src: abrau1,
      alt: "Krasnodar Territory, the village of Abrau-Durso",
      header: "Краснодарский край, с.Абрау-Дюрсо",
    },
    {
      id: "1",
      src: ahtarsk1,
      alt: "Krasnodar Territory, Primorsko-Akhtarsk",
      header: "Краснодарский край, г.Приморско-Ахтарск",
    },
    {
      id: "2",
      src: anapa1,
      alt: "Krasnodar Territory, Anapa",
      header: "Краснодарский край, г.Анапа",
    },
    {
      id: "3",
      src: armavir1,
      alt: "Krasnodar Territory, Armavir",
      header: "Краснодарский край, г.Армавир",
    },
    {
      id: "4",
      src: belorechensk1,
      alt: "Krasnodar Territory, Belorechensk",
      header: "Краснодарский край, г.Белореченск",
    },
    {
      id: "5",
      src: belorechensk2,
      alt: "Krasnodar Territory, Belorechensk",
      header: "Краснодарский край, г.Белореченск",
    },
    {
      id: "6",
      src: gelenzhik1,
      alt: "Krasnodar territory, Gelenzhik",
      header: "Краснодарский край, г.Геленжик",
    },
    {
      id: "7",
      src: kavkazskaya1,
      alt: "Krasnodar Territory, Kavkazskaya stanitsa",
      header: "Краснодарский край, ст.Кавказская",
    },
    {
      id: "8",
      src: krasnodar1,
      alt: "Krasnodar Territory, Krasnodar",
      header: "Краснодарский край, г.Краснодар",
    },
    {
      id: "9",
      src: maikop1,
      alt: "Republic of Adygea, Maykop",
      header: "респ.Адыгея, г.Майкоп",
    },
    {
      id: "10",
      src: sadki1,
      alt: "Krasnodar Territory, Sadki farm",
      header: "Краснодарский край, х.Садки",
    },
    {
      id: "11",
      src: sergievposad1,
      alt: "Moscow region, Sergiev Posad",
      header: "Московская область, г.Сергиев-Посад",
    },
    {
      id: "12",
      src: sochi1,
      alt: "Krasnodar Territory, Sochi",
      header: "Краснодарский край, г.Сочи",
    },
    {
      id: "13",
      src: supseh1,
      alt: "Krasnodar Territory, the village of Supsekh",
      header: "Краснодарский край, п.Супсех",
    },
    {
      id: "14",
      src: supseh2,
      alt: "Krasnodar Territory, the village of Supsekh",
      header: "Краснодарский край, п.Супсех",
    },
    {
      id: "15",
      src: surgut1,
      alt: "Khanty-Mansi Autonomous Okrug,",
      header: "Ханты-Мансийскоий АО, г.Сургут",
    },
  ];
  return (
    <div
      className="general-container bgcolor-grey-200 portfolio"
      id="portfolio"
    >
      <Container>
        <div className="general-header">
          Портфолио<p>Посмотрите фрагменты моих моих избранных проектов</p>
        </div>
      </Container>
      <div className="portfolio__photos" style={{ height: height }}>
        <div className="portfolio__arrows">
          <div
            className={scroll > 300 ? "portfolio__arrow--left" : ""}
            onClick={() => goToElement("portfolio-scroll--first")}
          >
            <span className="portfolio__arrow-left"></span>
          </div>
          <div
            className={scroll > 100 ? "" : "portfolio__arrow--right"}
            onClick={() => goToElement("portfolio-scroll--last")}
          >
            <span className="portfolio__arrow-right"></span>
          </div>
        </div>

        <Table className="portflio__table">
          <tbody>
            <tr className="portflio__row">
              <td
                id="portfolio-scroll--first"
                className="portfolio__col"
                colSpan={2}
              >
                <img
                  src={data[4].src}
                  alt={data[4].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[4].header}</div>
              </td>
              <td className="portfolio__col">
                <img
                  src={data[9].src}
                  alt={data[9].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[9].header}</div>
              </td>
              <td className="portfolio__col" rowSpan={2}>
                <img
                  src={data[3].src}
                  alt={data[3].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[3].header}</div>
              </td>
              <td className="portfolio__col">
                <img
                  src={data[14].src}
                  alt={data[14].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[14].header}</div>
              </td>
              <td className="portfolio__col" colSpan={2} rowSpan={2}>
                <img
                  src={data[8].src}
                  alt={data[8].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[8].header}</div>
              </td>
              <td className="portfolio__col" rowSpan={2}>
                <img
                  src={data[12].src}
                  alt={data[12].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[12].header}</div>
              </td>
              <td className="portfolio__col">
                <img
                  src={data[15].src}
                  alt={data[15].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[15].header}</div>
              </td>
              <td id="portfolio-scroll--last" className="portfolio__col">
                <img
                  src={data[6].src}
                  alt={data[6].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[6].header}</div>
              </td>
            </tr>
            <tr className="portflio__row">
              <td className="portfolio__col">
                <img
                  src={data[7].src}
                  alt={data[7].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[7].header}</div>
              </td>
              <td className="portfolio__col" colSpan={2} rowSpan={2}>
                <img
                  src={data[2].src}
                  alt={data[2].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[2].header}</div>
              </td>
              <td className="portfolio__col">
                <img
                  src={data[10].src}
                  alt={data[10].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[10].header}</div>
              </td>
              <td className="portfolio__col" colSpan={2} rowSpan={2}>
                <img
                  src={data[1].src}
                  alt={data[1].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[1].header}</div>
              </td>
            </tr>
            <tr className="portflio__row">
              <td className="portfolio__col">
                <img
                  src={data[11].src}
                  alt={data[11].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[11].header}</div>
              </td>
              <td className="portfolio__col" colSpan={2}>
                <img
                  src={data[13].src}
                  alt={data[13].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[13].header}</div>
              </td>
              <td className="portfolio__col">
                <img
                  src={data[5].src}
                  alt={data[5].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[5].header}</div>
              </td>
              <td className="portfolio__col" colSpan={2}>
                <img
                  src={data[0].src}
                  alt={data[0].alt}
                  className="portfolio__image"
                />
                <div className="portfolio__title">{data[0].header}</div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="portfolio__button">
        <a href="/" className="portfolio__more">
          Смотреть все проекты
        </a>
      </div>
    </div>
  );
};

export { Portfolio };
