import React, { useState } from "react";
import { Navbar, NavLink, Nav, Container, NavbarBrand } from "react-bootstrap";
import useWindowDimensions from "../hoc/WindowSize";

const Header = () => {
  const { width, height } = useWindowDimensions();
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
    document.getElementsByClassName("header__menu")[0].classList.toggle("header__menu--open");
  };
  return (
    <>
      <Navbar expand="md" fixed="top" className="header" id="merkulov">
        <Container>
          {width > 768 ? (
            <>
              <Nav>
                <div className="header__container">
                  <NavLink href="#about" className="header__link">
                    Обо мне
                  </NavLink>
                  <NavLink href="#portfolio" className="header__link">
                    Портфолио
                  </NavLink>
                  <NavbarBrand href="/" className="header__brand">
                    Merkulov
                  </NavbarBrand>
                  <NavLink href="#rates" className="header__link">
                    Тарифы
                  </NavLink>
                  <NavLink href="#contacts" className="header__link">
                    Контакты
                  </NavLink>
                </div>
              </Nav>
            </>
          ) : (
            <>
              <div className="header__phone">
                <NavbarBrand href="/" className="header__brand">
                  Merkulov
                </NavbarBrand>

                <div className="header_collapse">
                  <div className="header__burger">
                    <input
                      type="checkbox"
                      className="header__checkbox"
                      name=""
                      id=""
                      checked={checked}
                      onChange={() => handleClick()}
                    />
                    <div className="header__lines">
                      <div className="header__line header__line--1"></div>
                      <div className="header__line header__line--2"></div>
                      <div className="header__line header__line--3"></div>
                    </div>
                  </div>
                  <div className="header__menu" style={{ height: height }} >
                    <Nav>
                      <NavLink href="#about" className="header__link">
                        Обо мне
                      </NavLink>
                      <NavLink href="#portfolio" className="header__link">
                        Портфолио
                      </NavLink>
                      <NavLink href="#rates" className="header__link">
                        Тарифы
                      </NavLink>
                      <NavLink href="#contacts" className="header__link">
                        Контакты
                      </NavLink>
                    </Nav>
                  </div>
                </div>
              </div>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export { Header };
