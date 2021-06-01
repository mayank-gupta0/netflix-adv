import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";
import { auth } from "../firebase";

function Nav() {
  const [show, handleShow] = useState(false);

  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <div className="nav__right">
          <img
            // onClick={() => history.push('/profile')}
            className="nav__avatar"
            src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
            alt=""
          />
          <button
            className="signOut__button"
            onClick={() => auth.signOut()}
            // onClick={() => setSignIn(true)}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
