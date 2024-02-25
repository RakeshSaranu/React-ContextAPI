import React, { useContext, useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import { userContext } from './Context';

const Cart = () => {
const {Cart,setCart}=useContext(userContext);
  const [Total,setTotal]=useState('')
  useEffect(()=>{
    let sum=0
Cart.map((pro)=>sum=Number(sum)+Number(pro.price.substring(0, 3)))
setTotal(sum);
  },[Cart])
  return (
    <div>
      <h1>MY CART</h1>
      <h2>TOTAL : $ {Total}</h2>
      <div className='productContainer'>
        {
          Cart.map((prod)=>
            <SingleProduct prod={prod} key={prod.id} Cart={Cart} setCart={setCart}/>
          )
        }
      </div>
    </div>
  )
}

export default Cart;