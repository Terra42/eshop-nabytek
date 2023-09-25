import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({id, image, title}) => {
  return (
    <Link to={"/product/" + id}>
      <div className="product-card">
          <img src={image} alt={title} className="product-card_img" />
          <h4 className='product-card_title'>{title}</h4>
      </div>
    </Link>
  );
};

export default ProductCard;