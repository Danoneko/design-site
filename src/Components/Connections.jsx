import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Connections = () => {
  const [toSend, setToSend] = useState({
    connections_name: '',
    connections_phone: '',
    connections_mail: '',
    connections_object: '',
    connections_type: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if(toSend.connections_name === '' || toSend.connections_phone === ''){

      alert("Форма НЕ принята");
    }else{
      alert("Форма принята");
      console.log(toSend);
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="general-container" id="connections">
      <Container className="connections">
        <div className="connections__container">
          <div>
            <div className="general-header">
              Оставьте заявку
              <p>
                Если решили воспользоваться моими услугами пожалуйста заполните
                форму ниже, чтобы я мог с вами связаться
              </p>
            </div>
          </div>
          <form onSubmit={onSubmit} className="connections__form">
            <input type="text" name="connections_name" value={toSend.connections_name} onChange={handleChange} placeholder="Ваше имя"/>
            <input type="tel" name="connections_phone" value={toSend.connections_phone} onChange={handleChange} placeholder="Телефон с WhatsApp или Telegram" />
            <input type="mail" name="connections_mail" value={toSend.connections_mail} onChange={handleChange} placeholder="E-mail" />
            <input type="text" name="connections_object" value={toSend.connections_object} onChange={handleChange} placeholder="Тип объекта (Не обязательно)" />
            <input type="text" name="connections_type" value={toSend.connections_type} onChange={handleChange} placeholder="Площадь объекта (Не обязательно)" />
            <div>
            <input type="checkbox" /><label htmlFor="">Я согласен(-а) с Политикой конфеденциальности сайта</label>
            <input type="checkbox" /><label htmlFor="">Я согласен(-а) с Пользовательским соглашением сайта</label>
            </div>
            
            <div className="connections__send">
              <button type="submit" className="connections__button">Оставить заявку</button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export { Connections };
