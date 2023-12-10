import React from "react";
import { Header } from "../Components/Header";
import { Slider } from "../Components/Slider";
import { About } from "../Components/About";
import { Portfolio } from "../Components/Portfolio";
import { ArrowUp } from "../Components/ArrowUp";
import { Servises } from "../Components/Servises";
import { Advantages } from "../Components/Advantages";
import { Rates } from "../Components/Rates";
import { Stages } from "../Components/Stages";
import { Connections } from "../Components/Connections";
import { Contacts } from "../Components/Contacts";

const Home = () => {
  return (
    <>
      <ArrowUp />
      <Header />
      <Slider />
      <About />
      <Portfolio />
      <Servises />
      <Advantages />
      <Rates />
      <Stages />
      <Connections />
      <Contacts />
    </>
  );
};

export { Home };
