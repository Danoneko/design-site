import React from "react";
import { Carousel } from "react-bootstrap";
import useWindowDimensions from "../hoc/WindowSize";

import sliderInterior from "../Images/slider-interior.jpg";
import sliderLandscape from "../Images/slider-landscape.jpg";
import sliderPublic from "../Images/slider-public.jpg";
import sliderModel from "../Images/slider-model.jpg";

const dataSlide = [
  {
    id: "0",
    src: sliderInterior,
    alt: "Interior design",
    header: "Дизайн интерьера",
    text: "от расстановки до визуализации",
  },
  {
    id: "1",
    src: sliderLandscape,
    alt: "Landscape design",
    header: "Дизайн ландшафта",
    text: "от замеров до чертежей",
  },
  {
    id: "2",
    src: sliderPublic,
    alt: "Public design",
    header: "Дизайн общественных пространств",
    text: "от маленьких до больших",
  },
  {
    id: "3",
    src: sliderModel,
    alt: "Model design",
    header: "Дизайн моделей",
    text: "от простых до сложных",
  },
];

const Slider = () => {
  const { height } = useWindowDimensions();
  return (
    <>
      <Carousel className="slider" fade={true}>
        {dataSlide.map((i, key) => (
          <Carousel.Item style={{ height: height }} key={key}>
            <img
              className="d-block w-100 slider__img"
              src={i.src}
              alt={i.alt}
            />
            <Carousel.Caption>
              <div className="slider__header">{i.header}</div>
              <div>{i.text}</div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export { Slider };
