import React, {useState, useEffect} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductDisplay.css';


const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://apps.kodim.cz/react-2/xxxmuck/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  },[]);

  return (
    <div className="product-display">
      {products.length > 0 && products.map(product => <ProductCard key={product.id} id={product.id} image={product.image} title={product.name}/>)}
    </div>
  );
};

export default ProductDisplay;