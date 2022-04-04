import { useReducer } from "react";
import CartContest from "./cart-context";

// const initialStates={
//     items: [],
//     totalAmount:0
// }

// //concat give a new array(immutability)
// //item will have name price and every other thing

// const reducer= (state,action)=> {
//     if(action.type==="addition"){
//         // const updatedItems= state.items.concat(action.item);
//         const updatedTotalAmount=state.amount + action.item.price*action.item.amount;
//         const existingCartItemIndex = state.items.findIndex(
//           (item) => item.id === action.item.id
//         );
//         const existingCartItem = state.items[existingCartItemIndex];
//         let updatedItems;
    
//         if (existingCartItem) {
//           const updatedItem = {
//             ...existingCartItem,
//             amount: existingCartItem.amount + action.item.amount,
//           };
//           updatedItems = [...state.items];
//           updatedItems[existingCartItemIndex] = updatedItem;
//         } else {
//           updatedItems = state.items.concat(action.item);
//         }
    
//         return {
//           items: updatedItems,
//           totalAmount: updatedTotalAmount,
//         };
//       }
//       if (action.type === 'Remove') {
//         const existingCartItemIndex = state.items.findIndex(
//           (item) => item.id === action.id
//         );
//         const existingItem = state.items[existingCartItemIndex];
//         const updatedTotalAmount = state.totalAmount - existingItem.price;
//         let updatedItems;
//         if (existingItem.amount === 1) {
//           updatedItems = state.items.filter(item => item.id !== action.id);
//         } else {
//           const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
//           updatedItems = [...state.items];
//           updatedItems[existingCartItemIndex] = updatedItem;
//         }






//         return{
//             items:updatedItems,
//             amount:updatedTotalAmount
//         }
//     }


// }

// const Alen = (props) => {
//     const [currentState,setCurrentState] =useReducer(reducer, initialStates)
//   const AddItemtoCart = (item) => {
//     setCurrentState({
//         type:"addition",item:item
//     })

//   };
//   const removeItemfromCart = (id) => {
//     setCurrentState({
//       type:"Remove",id:id
//   })
//   }

//   const cartContext = {
//     items: currentState.items,
//     totalAmount: currentState.amount,
//     addItem: AddItemtoCart,
//     removeItem: removeItemfromCart,
//   };


const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContest.Provider value={cartContext}>
      {props.children}
    </CartContest.Provider>
  );
};

export default CartProvider;
