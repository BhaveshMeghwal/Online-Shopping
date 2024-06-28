import React from 'react'
import { productsData } from './CategoriesData';
import './Products.css'

const Products = () => {
    const ProductCard = ({ product }) => {
      return (
        <div className="product-card">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            {/* <p className="product-category">{product.category}</p> */}
          </div>
        </div>
      );
    };
  return (
    <>
    <div className="products-grid">
      {productsData.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  )
}

export default Products