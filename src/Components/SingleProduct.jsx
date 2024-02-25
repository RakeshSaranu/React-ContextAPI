import React, { useContext } from 'react'
import "./Styles.css"
import { userContext } from './Context'
const SingleProduct = ({prod}) => {
  const {Cart,setCart}=useContext(userContext);
  const handleAddToCart=()=>{
    setCart([...Cart,prod]);
  }
  const handleRemoveCart=()=>{
    setCart(Cart.filter((c) => c.id !== prod.id));
  }
  console.log(Cart)
  return (
    <div className='products'>
<img src={prod.image} alt={prod.name}/>
<div className='productDesc'>
<span style={{fontWeight:700}}>{prod.name}</span>
<span>$ {prod.price.substring(0, 3)}</span>
    
</div>
    {
      Cart.includes(prod)? (<button className='remove' onClick={handleRemoveCart}>REMOVE FROM CART</button>)
      : (<button className='add' onClick={handleAddToCart}>ADD TO CART</button>)
    }
    </div>
  )
}

export default SingleProduct