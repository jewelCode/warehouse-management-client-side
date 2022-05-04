import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState({});
    const [newQuantity, setNewQuantity] = useState({});
 

    useEffect(() => {
        const url = `http://localhost:5000/product/${inventoryId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [inventoryId])
    const handleSubmit = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const updatedQuantity = {quantity}

        const url = `http://localhost:5000/product/${inventoryId}`;
        
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedQuantity)
            })
            .then((response) => response.json())
            .then((result) => {
                setNewQuantity(result);
                event.target.reset();
            });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h3>Welcome to Details: {product.name}</h3>
                    <h3>Product Quantity:{product.quantity}</h3>
                    <img src={product.img} style={{ width: "300px" }} alt="" />
                    <button>Delivered</button>
                </div>
                <div className="col-md-6">
                    <h3>Restock The Items</h3>
                    <form onSubmit={handleSubmit}>
                        <input name="quantity" type="number" />
                        <input type="submit" />
                    </form>
                </div>
            </div>
            <Link to="/manageInventory">Manage Inventory</Link>
        </div>
    );
};

export default ProductDetail;