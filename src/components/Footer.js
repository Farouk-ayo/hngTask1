import classes from "./Footer.module.css";
import i4g from "../images/I4G.png";
import vector2 from "../images/Vector2.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img src={vector2} alt="" />
      <p>HNG internship 9 Frontend Task</p>
      <img src={i4g} alt="" />
    </footer>
  );
};

export default Footer;
