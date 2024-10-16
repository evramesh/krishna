import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./index.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="navbar">
      <a href="/" target="_parent" className="align-end">
        KPK
      </a>

      <nav ref={navRef}>
        <a className="button" href="/">
          HOME
        </a>
        <a className="button" href="/projects">
          PROJECTS
        </a>
        <a className="button" href="/profile">
          PROFILE
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes color="#fff" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars color="#fff" />
      </button>
    </header>
  );
}

export default Navbar;
