import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import cartcxt from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const alpha = useContext(cartcxt);
  const cartAmount = alpha.items.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.amount;
  }, 0);
  //currentValue.amount will give us the categoory not the total no of product in that category
  return (
    <button className={classes.button} onClick={props.onAddition}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
