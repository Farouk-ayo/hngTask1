import React from "react";

import style from "./Header.module.css";
import share from "../images/_Avatar share button.png";
import shareMobile from "../images/_Avatar share button2.png";
import profile from "../images/profile.png";

const Header = () => {
  return (
    <React.Fragment>
      <img className={style.share} src={share} alt="" />
      <img className={style.shareMobile} src={shareMobile} alt="" />
      <header className={style.header}>
        <img src={profile} id={style["profile__img"]} alt="" />
        <h1 id={style["twitter"]}>eff_r_k</h1>
        <h1 id={style["slack"]}> mustaphafarouk41</h1>
      </header>
    </React.Fragment>
  );
};
export default Header;
