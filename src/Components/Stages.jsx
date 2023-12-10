import React from "react";
import { Container } from "react-bootstrap";

import pen from "../Images/Stages/pen.svg";
import camera from "../Images/Stages/camera.svg";
import magnifier from "../Images/Stages/magnifier.svg";
import cursor from "../Images/Stages/cursor.svg";
import plan from "../Images/Stages/plan.svg";

const marks = [
  {
    id: "0",
    src: pen,
    alt: "pen",
    header: "Замеры",
    text: "Начало работы осуществляется с выезда на объект и снятия размеров. Я снимаю необоходимые фото и видео объекта. Мы познакомимся с вами лично и обсудим все пожелания и нюансы.",
  },
  {
    id: "1",
    src: camera,
    alt: "camera",
    header: "Обмерочный план",
    text: "Или чертеж-план сверху, который составляется в результате отснятых замеров. Обмерочный план уже входит в стоимость выезда, составляется в ближайшее время и содержит приблизительную расстановку мебели.",
  },
  {
    id: "2",
    src: magnifier,
    alt: "magnifier",
    header: "Поиск",
    text: "Пока составляется обмерочный план, самое время заняться поиском желаймого. Цвета, мебель, элементы, материалы и все то, что вы хотите видеть у себя в интерьере или ландшафте.",
  },
  {
    id: "3",
    src: cursor,
    alt: "cursor",
    header: "Визуализация",
    text: "Визуализация, вид каждого угла вашего помещения/участка. Соотнесение цветовой гаммы, стиля и требуемых задач. Вы увидите свой будущий желанный интерьер или ландшафт в 3D.",
  },
  {
    id: "4",
    src: plan,
    alt: "plan",
    header: "Чертежи",
    text: "Чертежи - заключительный этап дизайн-проекта. После согласования визуализации на почту вы получите файл PDF формата, в котором будут содержаться все необходимые для вашего прораба размеры, кодировки товаров и цветов.",
  },
];

const Stages = () => {
  return (
    <div className="general-container stages">
      <Container>
        <div className="general-header">
          Этапы работы
          <p>Ознакомьтесь в каком порядке выполняется каждый дизайн-проект</p>
        </div>
        <div className="stages__marks">
          {marks.map((a, key) => (
            <div className="stages__point" key={key}>
              <div>
                <div className="stages__mark">
                  <img src={a.src} alt={a.alt} />
                </div>
              </div>
              <div className="stages__text">
                <div className="stages__header">{a.header}</div>
                <div className="stages__title">{a.text}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export { Stages };
