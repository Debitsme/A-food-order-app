import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import Cartcxt from "../../store/cart-context";
import CartItem from "./cartItem";

// const Cart = (props) => {
//   const cxtCart = useContext(Cartcxt);
//   const totalAmount = cxtCart.totalAmount;

//   const cartItemAddHandler = (item) => {
//     Cartcxt.addItem({...item, amount: 1});
//   };
//   const cartItemRemoveHandler = (id) => {
//     Cartcxt.removeItem(id);
//   };

//   const cartItems = (
//     <ul className={classes["cart-items"]}>
//       {cxtCart.items.map((item) => (
//         <CartItem
//           key={item.id}
//           onRemove={cartItemRemoveHandler.bind(null,item.id)}
//           onAdd={cartItemAddHandler.bind(null,item)}
//           price={item.price}
//           amount={item.amount}
//           name={item.name}
//         />
//       ))}
//     </ul>
//   );


const Cart = (props) => {
  const cartCtx = useContext(Cartcxt);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
 

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClick}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
