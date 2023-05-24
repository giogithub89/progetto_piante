import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { useRef } from "react";
import logo from './logo.png'


function Navbar() {
  const Span1 = useRef(0);
  const Span2 = useRef(0);
  const Span3 = useRef(0);

  // const [display, setDisplay] = useState("nascosto")

  const handleClick = () => {
    let ulHamburger = document.getElementById("ulHamburger");

    // console.log(ulHamburger)

    if (ulHamburger.className === "nascosto") {
      ulHamburger.setAttribute("class", "visibile");
      Span2.current.style.display = "none";
      Span1.current.style.transform = "rotate(45deg) translate(1px, 11px)";
      Span3.current.style.transform = "rotate(-45deg) translate(-2px, -2px)";

      //     // setDisplay("visibile")
    } else {
      ulHamburger.setAttribute("class", "nascosto");

      // setDisplay("nascosto")
      Span2.current.style.display = "block";
      Span1.current.style.transform = "rotate(0deg) translate(0px, 0px)";
      Span3.current.style.transform = "rotate(0deg) translate(0px, 0px)";
    }
  };

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    window.pageYOffset = 0;
  }
  function topFunction2() {
    document.body.scrollTop = 20; // For Safari
    document.documentElement.scrollTop = 500; // For Chrome, Firefox, IE and Opera
    window.pageYOffset = 990;
  }
  return (
    <>
      <>
        <div className="navbar">
          <div className="ham">
            <div className="logo"></div>
            <div className="hamburger" onClick={() => handleClick()}>
              <span className="span1" ref={Span1}></span>
              <span className="span2" ref={Span2}></span>
              <span className="span3" ref={Span3}></span>
            </div>
          </div>


          <div>
            <ul className="nascosto" id="ulHamburger">
              <li onClick={() => { topFunction(); handleClick() }}><Link to="/"> Home</Link></li>
              <li>
                <a>Esplora</a>
              </li>
              <li>
                <a>Chi siamo</a>
              </li>
              <li>
                <a>Contatti</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    </>
  );
}
export default Navbar;
