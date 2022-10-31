import classes from "./Header.module.css";
import share from "../images/_Avatar share button.png";
import profile from "../images/profile__img.png";

import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <img className={classes.share} src={share} alt="" />
      <header className={classes.header}>
        <img src={profile} id="profile__img" alt="" />
        <h1 id="twitter">eff_r_k</h1>
        <h1 id="slack"> mustaphafarouk41</h1>
      </header>
    </React.Fragment>
  );
};
export default Header;
