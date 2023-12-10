import React from "react";
import { Container } from "react-bootstrap";

import mail from "../Images/Social/mail.svg";
import phone from "../Images/Social/phone.svg";
import instagram1 from "../Images/Social/instagram1.svg";
import instagram2 from "../Images/Social/instagram2.svg";
import telegram1 from "../Images/Social/telegram1.svg";
import telegram2 from "../Images/Social/telegram2.svg";
import vk1 from "../Images/Social/vk1.svg";
import vk2 from "../Images/Social/vk2.svg";
import ok1 from "../Images/Social/ok1.svg";
import ok2 from "../Images/Social/ok2.svg";
import facebook1 from "../Images/Social/facebook1.svg";
import facebook2 from "../Images/Social/facebook2.svg";

const Contacts = () => {
  return (
    <div className="general-container contacts" id="contacts">
      <Container className="about">
        <div className="general-container--flex">
          <div className="general-flex-container--1">
            <div className="general-header">
              Остались вопросы?
              <p>Свяжитесь со мной или оставьте заявку в форме</p>
            </div>
            <form className="contacts__form">
              <input type="text" name="contacts-name" placeholder="Имя" />
              <input type="phone" name="contacts-phone" placeholder="Телефон с WhatsApp или Telegram" />
              <input type="text" name="contacts-text" placeholder="Какой вопрос?" />
              <div className="contacts__send">
                <button type="submit" className="contacts__button">Задать вопрос</button>
              </div>
            </form>
          </div>
          <div className="general-flex-container--2 contacts__contacts">
            <div className="contacts__connection">
              <div className="contacts__title">Контакты</div>
              <div className="contacts__contacts--flex">
                <a href="/" className="general-container--flex">
                  <div>
                    <img src={mail} alt="mail" />
                  </div>
                  <div>vladimir.m69@mail.ru</div>
                </a>
                <a href="/" className="general-container--flex">
                  <div>
                    <img src={phone} alt="phone" />
                  </div>
                  <div>+ 7 (961) 970-08-36</div>
                </a>
              </div>
            </div>
            <div className="contacts__connection">
              <div className="contacts__title">Я в социальных сетях</div>
              <div className="contacts__social--flex">
                <a href="/">
                  <img
                    src={instagram1}
                    alt="instagram"
                    className="contacts__social--1"
                  />
                  <img
                    src={instagram2}
                    alt="instagram"
                    className="contacts__social--2"
                  />
                </a>
                <a href="/">
                  <img
                    src={telegram1}
                    alt="telegram"
                    className="contacts__social--1"
                  />
                  <img
                    src={telegram2}
                    alt="telegram"
                    className="contacts__social--2"
                  />
                </a>
                <a href="/">
                  <img src={vk1} alt="vk" className="contacts__social--1" />
                  <img src={vk2} alt="vk" className="contacts__social--2" />
                </a>
                <a href="/">
                  <img src={ok1} alt="ok" className="contacts__social--1" />
                  <img src={ok2} alt="ok" className="contacts__social--2" />
                </a>
                <a href="/">
                  <img
                    src={facebook1}
                    alt="facebook"
                    className="contacts__social--1"
                  />
                  <img
                    src={facebook2}
                    alt="facebook"
                    className="contacts__social--2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contacts__footer">
          <div>
            <a href="/privacy-policy">Политика конфеденциальности</a>
          </div>
          <div>
            <a href="https://www.instagram.com/danoneko/">2022 by Danoneko</a>{" "}
          </div>
          <div>
            <a href="/user-agreement">Пользовательское соглашение</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { Contacts };
