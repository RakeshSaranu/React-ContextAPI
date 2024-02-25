import React, { useState, useEffect } from 'react';
import faker from "faker";
import SingleProduct from './SingleProduct';
import "./Styles.css"

faker.seed(100);

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const productsArray = [...Array(18)].map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.random.image(),
    }));

    setProducts(productsArray);
  }, []); 

  return (
    <div className='productContainer'>
      {products.map((pro,index) => (
        <SingleProduct key={index} prod={pro}/> 
      ))}
    </div>
  );
}

export default Home;
