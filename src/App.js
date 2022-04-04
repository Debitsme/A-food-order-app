import { Fragment } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from "./components/Cart/Cart"
import React, { useState } from 'react';
import CartContext from "./store/cart-provider"

function App() {
 const [openPoratl, setOpenPortal]= useState(false);

 function openItCart() {
  setOpenPortal(true)
 }
 function closeItPortal() {
  setOpenPortal(false)
}
  return (
    <CartContext>
     { openPoratl &&  <Cart  onClick={closeItPortal} />}
      <Header onAdd={openItCart}/>
      <main>
        <Meals />
      </main>
      
    </CartContext>
  );
}

export default App;
