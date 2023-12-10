import React from "react";
import { Container } from "react-bootstrap";

import d3 from "../Images/Icons/3d.svg";
import drawings from "../Images/Icons/drawings.svg";
import furniture from "../Images/Icons/3d.svg";
import interior from "../Images/Icons/interior.svg";
import landscape from "../Images/Icons/landscape.svg";
import light from "../Images/Icons/light.svg";
import material from "../Images/Icons/material.svg";
import model from "../Images/Icons/model.svg";
import plan from "../Images/Icons/plan.svg";
import project from "../Images/Icons/project.svg";
import publik from "../Images/Icons/public.svg";
import size from "../Images/Icons/size.svg";
import wall from "../Images/Icons/wall.svg";
import water from "../Images/Icons/water.svg";

const servise = [
  {
    id: "0",
    src: interior,
    alt: "Interior",
    header: "Интерьер",
  },
  {
    id: "1",
    src: landscape,
    alt: "Landscape",
    header: "Ландшафт",
  },
  {
    id: "2",
    src: publik,
    alt: "Public places",
    header: "Общественные места",
  },
  {
    id: "3",
    src: model,
    alt: "Models",
    header: "Модели",
  },
  {
    id: "4",
    src: drawings,
    alt: "Drawings",
    header: "Чертежи",
  },
  {
    id: "5",
    src: d3,
    alt: "3D-Visualization",
    header: "3D-Визуализация",
  },
];
const work = [
  {
    id: "0",
    src: project,
    alt: "Full design project",
    header: "Полный дизайн проект",
  },
  {
    id: "1",
    src: furniture,
    alt: "Arrangement of furniture",
    header: "Расстановка мебели",
  },
  
  {
    id: "2",
    src: material,
    alt: "Selection of materials/lighting/furniture",
    header: "Подбор материалов/освещения/мебели",
  },
  {
    id: "3",
    src: wall,
    alt: "Calculations of wall/floor coverings",
    header: "Расчеты настенных/напольных покрытий",
  },
  {
    id: "4",
    src: size,
    alt: "Dimensions of boxes and niches",
    header: "Размеры коробов и ниш",
  },
  {
    id: "5",
    src: plan,
    alt: "Redevelopment plan",
    header: "План перепланировки",
  },
  {
    id: "6",
    src: light,
    alt: "Binding of electric points",
    header: "Привязка электроточек",
  },
  {
    id: "7",
    src: water,
    alt: "Binding of sanitary and technical equipment",
    header: "Привязка сан-технического оборудования",
  },
];

const Servises = () => {
  return (
    <div className="general-container">
      <Container className="servises">
        <div className="general-header">
          Услуги<p>Ознакомьтесь с видами работ и услуг, которые я выполняю</p>
        </div>
        <div className="servises__container">
          <div className="general-title">Виды выполняемых работ</div>
          <div className="servises__servises">
            {servise.map((a, key) => (
              <div className="servises__service" key={key}>
                <div className="servises__bg">
                  <img src={a.src} alt={a.alt} className="servises__img" />
                </div>
                <div className="servises__text">{a.header}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="servises__container">
          <div className="general-title">Виды выполняемых услуг</div>
          <div className="servises__servises">
            {work.map((a, key) => (
              <div className="servises__service" key={key}>
                <div className="servises__bg">
                  <img src={a.src} alt={a.alt} className="servises__img" />
                </div>
                <div className="servises__text">{a.header}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export { Servises };
