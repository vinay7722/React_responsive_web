import React from "react";
import { NavLink } from "react-router-dom";
import img from "../src/Images/home.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your Business With"
        imgsrc={img}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
