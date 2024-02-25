import React, { useContext } from 'react'

import { Link } from 'react-router-dom';
import "./Styles.css"
import { userContext } from './Context';
const Header = () => {
  const {Cart}=useContext(userContext)
  return (
    <div>
        <span className='Header'>REACT CONTEXT API</span>
        <ul className='nav'>
          <li>
            <Link to ="/">HOME PAGE</Link>
          </li>
          <li>
            <Link to ="/Cart">CART PAGE ({Cart.length})</Link>
          </li>
        </ul>
    </div>
  )
}

export default Header;