import classes from "./Footer.module.css";
const Body = () => {
  return (
    <div className={classes.body}>
      <a href="https://twitter.com/eff_r_k">Twitter Link</a>
      <a href="https://training.zuri.team/" id="btn__zuri">
        Zuri Team
      </a>
      <a href="http://books.zuri.team" id="books">
        <h1> Zuri Books</h1>
        <p>A place where you can find books about design and coding</p>
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=<mustapha farouk>"
        id="book__python"
      >
        <p> Checkout my book in stock</p>
      </a>
      <a href="https://background.zuri.team" id="pitch">
        <p>We offer wages to coders with maximum efficiency</p>
      </a>
      <a href="https://books.zuri.team/design-rules" id="book__design">
        <p>Design books offered by Zuri</p>
      </a>
    </div>
  );
};

export default Body;
