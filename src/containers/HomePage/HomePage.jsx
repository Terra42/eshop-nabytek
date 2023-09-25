import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="home-page">
        <Header/>
        <div className="home-page_content">
          <Hero/>
          <ProductDisplay/>
        </div>
    </div>
  );
};

export default HomePage;