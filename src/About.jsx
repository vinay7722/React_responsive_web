import React from "react";
import Common from "./Common";
import img from './Images/home.svg'

const About = () => {
  return (
    <>
      <Common 
        name="Welcome to About page"
        imgsrc={img}
        visit="/contact"
        btnname="Contact Now"/>
    </>
  );
};

export default About;
