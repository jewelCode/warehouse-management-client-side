
import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

const ProductDetail = () => {
    const { inventoryId } = useParams();
    const [product] = useProduct(inventoryId);
    const [quantity, setQuantity] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${inventoryId}`
        fetch(url)
            .then(response => response.json())
            .then(result => {
                setQuantity(result);
            })

    }, [inventoryId])

    const handleSubmit = event => {
        const inputQuantity = event.target.quantity.value;
        const updatingQuantity = { inputQuantity };
        const url = `http://localhost:5000/product/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatingQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);

            })
    }

    return (
        <div className="container mt-5 shadow">
            <div className="row">
                <div className="col-md-6 p-5">
                    <div className="p-2 text-light" style={{ backgroundColor: "#89C74A" }}>
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
                        <   button style={{ backgroundColor: "#89C74A" }} className="btn text-light">Delivered</button>
                    </div>
                </div>
                <div className="col-md-6 ml-4 mt-5">
                    <h3 style={{ color: "#89C74A" }} >Restock The Items</h3>
                    <form onSubmit={handleSubmit}>
                        <input name="quantity" type="number" />
                        <br /><br />
                        <input className="btn text-light" style={{ backgroundColor: "#89C74A" }} type="submit" value="Add New Quantity" />
                    </form>
                </div>
            </div>
            <div className="text-center">
                <Link to="/manageInventory" className="btn btn-warning text-light">Manage Inventory</Link>
            </div>
        </div>
    );
};

export default ProductDetail;