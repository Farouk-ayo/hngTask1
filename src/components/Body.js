import style from "./Body.module.css";
import icon from "../images/Icon.png";
import slack from "../images/slack.png";

const Body = () => {
  return (
    <div className={style.body}>
      <a href="https://twitter.com/eff_r_k" id={style["twitter"]}>
        Twitter Link
      </a>
      <a href="https://training.zuri.team/" id={style["btn__zuri"]}>
        Zuri Team
      </a>
      <a href="http://books.zuri.team" id={style["books"]}>
        <h1> Zuri Books</h1>
        <p>A place where you can find books about design and coding</p>
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=<faroukayo>"
        id={style["book__python"]}
      >
        <p>Python Books</p>
      </a>
      <a href="https://background.zuri.team" id={style["pitch"]}>
        <p>Background Check for Coders</p>
      </a>
      <a href="https://books.zuri.team/design-rules" id={style["book__design"]}>
        <p>Design books</p>
      </a>
      <div className={style.socials}>
        <img src={slack} alt="" />
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default Body;
