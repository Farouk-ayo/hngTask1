import style from "./Body.module.css";
import icon from "../images/Icon.png";
import slack from "../images/slack.png";

const Body = () => {
  return (
    <div className={style.body}>
      <a href="https://twitter.com/eff_r_k">Twitter Link</a>
      <a href="https://training.zuri.team/" id={style["btn__zuri"]}>
        Zuri Team
      </a>
      <a href="http://books.zuri.team" id={style["books"]}>
        <h1> Zuri Books</h1>
        <p>A place where you can find books about design and coding</p>
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=<mustapha farouk>"
        id={style["book__python"]}
      >
        <p> Checkout my book in stock</p>
      </a>
      <a href="https://background.zuri.team" id={style["book__design"]}>
        <p>We offer a prize to coders with maximum efficiency</p>
      </a>
      <a href="https://books.zuri.team/design-rules" id={style["book__design"]}>
        <p>Design books offered by Zuri</p>
      </a>
      <div className={style.socials}>
        <img src={icon} alt="" />
        <img src={slack} alt="" />
      </div>
    </div>
  );
};

export default Body;
