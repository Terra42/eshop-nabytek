import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import './ProductDetail.css';

const ProductDetail = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState([]);

    useEffect( () => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://apps.kodim.cz/react-2/xxxmuck/products/" + productId);
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    },[]);


  return (
    <div className="product-detail">
        <div className="product-detail_img">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail_content">
            <h3 className='product-detail_title'>{product.name}</h3>
            <Button name="Objednat"/>
        </div>
    </div>
  );
};

export default ProductDetail;