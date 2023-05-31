import React from "react";
import "./Hero.css"
import Button from "../../Button/Button";


const Hero = () => {

  return (
    <>
      <div className="hero">
        <div>
          <h1 >Biosfere</h1>
          <h2 className='animate-charcter' >TENIAMO A CUORE LA NATURA</h2>
        </div>
        <Button value='Esplora'></Button>
      </div>

    </>
  )


};

export default Hero;
