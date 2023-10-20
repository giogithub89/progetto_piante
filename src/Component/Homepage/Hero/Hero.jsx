import React from "react";
import "./Hero.css";
import Button from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/esplora");
  };
  return (
    <>
      <div className="hero">
        <div>
          <h1>Biosphere</h1>
          <h2 className="animate-charcter">TENIAMO A CUORE LA NATURA</h2>
        </div>
        <Button type="button" value="Esplora" onClick={handleNavigation}></Button>
      </div>
    </>
  );
};

export default Hero;
