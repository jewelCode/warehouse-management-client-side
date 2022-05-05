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
                <div className="col-md-6 p-5">
                    <div className="p-2 text-light" style={{backgroundColor: "#89C74A"}}>
                        <h4>Name: {product.name}</h4>
                        <h6>Quantity:{product.quantity}</h6>
                        <p>Description: {product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Supplier: {product.supplier}</p>
                    </div>
                    <div className="text-center">
                        <img src={product.img} style={{ width: "300px" }} alt="" />
                    </div>
                    <br />
                    <div className="text-center">
                    <   button style={{backgroundColor: "#89C74A"}}  className="btn text-light">Delivered</button>
                    </div>
                </div>
                <div className="col-md-6 ml-4 mt-5">
                    <h3 style={{color: "#89C74A"}} >Restock The Items</h3>
                    <form onSubmit={handleSubmit}>
                        <input name="quantity" type="number" />
                        <br /><br />
                        <input className="btn text-light" style={{backgroundColor: "#89C74A"}} type="submit" value="Add New Quantity" />
                    </form>
                </div>
            </div>
            <Link to="/manageInventory">Manage Inventory</Link>
        </div>
    );
};

export default ProductDetail;