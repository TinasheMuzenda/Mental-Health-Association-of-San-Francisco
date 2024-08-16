import { useState } from "react";
import "../App.css";
import Logo from "../../public/logo.svg";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState(2);
    const handleClick = (number) => {
      setActiveTab(number);
    };
  return (
    <>
      <header className="mobileNav">
        <div className="container">
          <picture>
            <img src={Logo} alt="Logo" className="logo" />
          </picture>
          <div className="hamburger"></div>
        </div>
      </header>

      <header className="pcNav">
        <div className="container">
          <picture>
            <img src={Logo} alt="Logo" className="logo" />
          </picture>
          <nav className="navLinks">
            <a
              href="#"
              onClick={() => {
                handleClick(1);
              }}
              className={` ${activeTab == 1 ? "active" : ""} `}
            >
              HOME
            </a>
            <a
              href="#"
              onClick={() => {
                handleClick(2);
              }}
              className={` ${activeTab == 2 ? "active" : ""} `}
            >
              ABOUT US
            </a>
            <a
              href="#"
              onClick={() => {
                handleClick(3);
              }}
              className={` ${activeTab == 3 ? "active" : ""} `}
            >
              TAKE ACTION
            </a>
            <a
              href="#"
              onClick={() => {
                handleClick(4);
              }}
              className={` ${activeTab == 4 ? "active" : ""} `}
            >
              SERVICES
            </a>
            <a
              href="#"
              onClick={() => {
                handleClick(5);
              }}
              className={` ${activeTab == 5 ? "active" : ""} `}
            >
              Warm line 855-600-WARM
            </a>
            <button>SUPPORT US</button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;