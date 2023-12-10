import React from "react";
import { Container } from "react-bootstrap";

const Rates = () => {
  return (
    <div className="general-container rates" id="rates">
      <Container>
        <div className="general-header">
          Тарифы
          <p>
            Выберите тариф, который подходит вам, свяжитесь со мной и закажите
            дизайн-проект.
          </p>
        </div>
        <div className="rates__cards">
          <div className="rates__card--1">
            <div>
              <div className="rates__header">Визуализация</div>
              <div className="rates__price">400 ₽/м²</div>
              <div className="rates__list">
                <ul>
                  <li>Обмерочный план</li>
                  <li>Визуализация</li>
                  <li>Расстановка мебели</li>
                  <li>Чертеж-план сверху</li>
                </ul>
              </div>
            </div>
            <a href="#connections" className="rates__button">Заказать проект</a>
          </div>
          <div className="rates__card--2">
            <div>
              <div className="rates__header">Стандарт</div>
              <div className="rates__price">600 ₽/м²</div>
              <div className="rates__list">
                <ul>
                  <li>Обмерочный план</li>
                  <li>Визуализация</li>
                  <li>Расстановка мебели</li>
                  <li>Чертеж-план сверху</li>
                  <li>Расчеты настенных/напольных покрытий</li>
                </ul>
              </div>
            </div>
            <a href="#connections" className="rates__button">Заказать проект</a>
          </div>
          <div className="rates__card--1">
            <div>
              <div className="rates__header">Детализация</div>
              <div className="rates__price">1000 ₽/м²</div>
              <div className="rates__list">
                <ul>
                  <li>Тариф Стандарт +</li>
                  <li>Привязка электро-точек</li>
                  <li>Привязка сан-тех. оборудования</li>
                  <li>Размеры коробов и ниш</li>
                  <li>Подбор материалов</li>
                </ul>
              </div>
            </div>
            <a href="#connections" className="rates__button">Заказать проект</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { Rates };
