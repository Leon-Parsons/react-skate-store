import React from 'react';
import {ProductList} from "../Additions/ProductList";
import ProductCard from '../components/ProductCard';
import '../styles/Products.css'

function Products() {
  return (
    <div className='products'>
      <h1 className='productsTitle'>Products</h1>
      <div className='productList'>
        {ProductList.map((productItem, key)=> {
        return (
        <ProductCard
          key={key}
          image={productItem.image} 
          name={productItem.name} 
          price={productItem.price}
        />
        );
        })};
      </div>
    </div>
  )
}

export default Products
