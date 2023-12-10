import React from "react";
import { Container } from "react-bootstrap";
import useWindowDimensions from "../hoc/WindowSize";

const NotFound = () => {
  const { height } = useWindowDimensions();
  document.body.style.overflow = "hidden";
  return (
    <div className="not-found" style={{ height: height }}>
      <Container className="not-found__container">
        <div className="not-found__header">404</div>
        <div className="not-found__title">
          Запрашиваемая страница не найдена
        </div>
        <div className="not-found__text">
          Возможно вы ошиблись в адресе или страница была перемещена. Вы можете
          вернуться на главную, или воспользоваться меню.
        </div>
        <div className="not-found__send">
          <a href="/" className="not-found__button">
            На главную
          </a>
        </div>
      </Container>
    </div>
  );
};

export { NotFound };
