import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState({});
 

    useEffect(() => {
        const url = `http://localhost:5000/product/${inventoryId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [inventoryId])

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {
       
    };

    console.log(watch("example")); // watch input value by passing the name of it
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="number" placeholder="Input Product Quantity" {...register("qunatity")} />
                        <br />
                        <input type="submit" value="Add Quantity" />
                    </form>
                </div>
            </div>
            <Link to="/manageInventory">Manage Inventory</Link>
        </div>
    );
};

export default ProductDetail;