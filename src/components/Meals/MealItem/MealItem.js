import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import Cartcxt from "../../../store/cart-context"
import { useContext } from 'react';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const newContext= useContext(Cartcxt)
  const addtoCartHandler = (amount) => {
    newContext.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price,
    })

  }
 

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddtoCart={addtoCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
