import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {inventoryId} = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(()=>{
        const url = `http://localhost:5000/product/${inventoryId}`
        fetch(url)
        .then(response => response.json())
        .then(data => setProduct(data))
    }, [inventoryId])

    const handleProductQuantity = () =>{
       
    }
    return (
        <div>
            <h3>Welcome to Details: {product.name}</h3>
            <h3>Product Quantity: {product.quantity}</h3>
            <img src={product.img} style={{width: "300px"}} alt="" />
            <button>Delivered</button>
        </div>
    );
};

export default ProductDetail;