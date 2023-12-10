import React from "react";
import { Container } from "react-bootstrap";
import my_photo from "../Images/my-photo.png";

const About = () => {
  return (
    <div className="general-container" id="about">
      <Container className="about">
        <div className="general-header">Обо мне</div>
        <div className="general-container--flex about__container">
          <div className="general-flex-container--1 about__photo">
            <img src={my_photo} alt="me" className="about__my-photo"/>
          </div>
          <div className="general-flex-container--2 about__text">
            <p>
              Меня зовут <b>Владимир Меркулов</b>. Уже более 30 лет я увлеченно
              занимаюсь строительством, 7 лет из которых являюсь дизайнером
              интерьера и ландшафта.
            </p>
            <p>
              Я не просто самоучка, но и профессионал инженерно-физического
              дела. На моем счету более 200 выполненных объектов.
            </p>
            <p>
              Мне известны все нюансы дизайна и строительства. Я создаю
              современные и функциональные дизайнерские рашения для своих
              клиентов.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { About };
