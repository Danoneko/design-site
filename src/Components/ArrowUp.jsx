import React, { useState, useEffect } from "react";
import arrowUp from "../Images/chevron-right.svg";

const ArrowUp = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={scroll < 300 ? "arrow-up" : "arrow-up arrow-up--appear"} onClick={handleUpButton}>
        <img src={arrowUp} alt="Up" />
      </div>
    </>
  );
};

export { ArrowUp };
