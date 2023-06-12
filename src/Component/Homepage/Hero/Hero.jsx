import React from "react";
import "./Hero.css";
import Button from "../../../Component/Button/Button";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div>
          <h1>Biosphere</h1>
          <h2 className="animate-charcter">TENIAMO A CUORE LA NATURA</h2>
        </div>
        <Button value="Esplora"></Button>
      </div>
    </>
  );
};

export default Hero;
