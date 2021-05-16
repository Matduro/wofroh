import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./show/Button";
import "./NavBar.css";

function NavBar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false)
    props.resetSelectedMusclegroups()
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            WoFroH <i className="fas fa-fire"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/musclegroups"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Build a Workout
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/savedworkouts"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                My Workouts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Log Out
              </Link>
            </li>
            <li className="hello-user"><Link to="/" className="nav-links hello-user" onClick={closeMobileMenu}>
              Hello, Warrior
              </Link>
            </li>
          </ul>
          {button && (
            <Button to="/sign-up" buttonStyle="btn-outline">
              Log Out
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
