import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { inventoryId } = useParams();

  const [product, setProduct] = useState({});

  // const [quantity, setQuantity] = useState("");
  // const { quantity } = product;


  useEffect(() => {
    const url = `http://localhost:5000/product/${inventoryId}`;
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setProduct(result);
      })

  }, [])

  const handleDelivery = () => {
    fetch(`http://localhost:5000/product/delivery/${inventoryId}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setProduct({ ...product, quantity: product.quantity - 1 });
      });
  };
  // const { register, handleSubmit } = useForm();
  const handleAddQuantity = (event) => {
    event.preventDefault();
    const newQuanity = event.target.quantity.value;
    fetch(`http://localhost:5000/product/addproduct/${inventoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: newQuanity }),
    })
      .then((res) => res.json())
      .then((json) => {
        setProduct({
          ...product,
          quantity: parseInt(product.quantity) + parseInt(newQuanity),
        });
        event.target.reset()
      });
  };


  return (
    <div className="container mt-5 shadow">
      <h2 className="text-center text-light p-5" style={{ backgroundColor: "#89C74A" }}>Product Details</h2>
      <div className="row">
        <div className="col-md-6 text-center bg-light border rounded">
          <div className="p-2">
            <h4>Name: {product.name}</h4>
            <h6>Quantity:{product.quantity}</h6>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Supplier: {product.supplier}</p>
            <div className="text-center">
              <img src={product.img} style={{ width: "300px" }} alt="" />
            </div>
            <div className="text-center">
              <button onClick={handleDelivery} style={{ backgroundColor: "#89C74A" }} className="btn text-light">Delivered</button>
            </div>
          </div>

        </div>
        <div className="col-md-6 ml-4 bg-success text-center">
          <h3 style={{ color: "#89C74A" }}>Add New Quantity</h3>
          <form onSubmit={handleAddQuantity}>
            <input className="mt-3" type="number" name="quantity" placeholder="Input Only Number" />
            <br />
            <br />
            <input className="btn text-light" style={{ backgroundColor: "#89C74A" }} type="submit" value="Add New Quantity" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;