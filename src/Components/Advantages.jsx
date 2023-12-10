import React from "react";
import useWindowDimensions from "../hoc/WindowSize";
import supseh1 from "../Images/supseh1.jpg";
import mark from "../Images/mark.svg";

const marks = [
  {
    id: "0",
    src: mark,
    alt: "mark",
    header: "Неограниченное количество поправок",
  },
  {
    id: "1",
    src: mark,
    alt: "mark",
    header: "Возможность авторского надзора",
  },
  {
    id: "2",
    src: mark,
    alt: "mark",
    header: "Бесплатный обмерочный план",
  },
  {
    id: "3",
    src: mark,
    alt: "mark",
    header: "Удаленная работа",
  },
  {
    id: "4",
    src: mark,
    alt: "mark",
    header: "Выезд на объект",
  },
];

const Advantages = () => {
  const { height } = useWindowDimensions();
  return (
    <div
      className="general-container general-container--flex advantages"
      style={{ minHeight: height }}
    >
      <div className="advantages__container--1 general-flex-container--1">
        <div className="general-header">
          Преимущества<p>Плюсы сотрудничества со мной</p>
        </div>
        <div className="advantages__marks">
          {marks.map((a, key) => (
            <div className="advantages__point" key={key}>
              <div className="advantages__mark">
                <img src={a.src} alt={a.alt} />
              </div>
              <div className="advantages__text">{a.header}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="advantages__container--2 general-flex-container--2">
        <img
          src={supseh1}
          className="advantages__bg"
          alt=""
        />
      </div>
    </div>
  );
};

export { Advantages };
