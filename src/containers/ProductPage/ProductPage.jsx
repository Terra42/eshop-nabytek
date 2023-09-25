import React from 'react';
import Header from '../../components/Header/Header';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      <Header/>
      <ProductDetail/>
    </div>
  );
};

export default ProductPage;