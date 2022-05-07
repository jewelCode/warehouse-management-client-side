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

    const deliveryHandleBtn = () => {
        fetch(`http://localhost:5000/product/decrease/${inventoryId}`, {
          method: "PUT",
        })
          .then((res) => res.json())
          .then((result) => {
              console.log(result)
            setProduct({ ...product, quantity: product.quantity - 1 });
          });
      };
    // const { register, handleSubmit } = useForm();
    const handleRestock = (event) => {
    event.preventDefault();
    const value = event.target.restock.value;

    fetch(`http://localhost:5000/product/increase/${inventoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: value }),
    })
      .then((res) => res.json())
      .then((json) => {
        setProduct({
          ...product,
          quantity: parseInt(product.quantity) + parseInt(value),
        });
      });
  };


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
                        <button onClick={deliveryHandleBtn}>Delivered</button>
                        <button style={{ backgroundColor: "#89C74A" }} className="btn text-light">Delivered</button>
                    </div>
                </div>
                <div className="col-md-6 ml-4 mt-5">
                    <h3 style={{ color: "#89C74A" }} >Restock The Items</h3>
                    <form onSubmit={handleRestock}>
                        <input type="number" name="restock" id="" />
                        <input type="submit" value="Restock" className="restock-btn" />
                    </form>
                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="number" {...register("quantity")} />
                        <br /><br />
                        <input className="btn text-light" style={{ backgroundColor: "#89C74A" }} type="submit" value="Add New Quantity" />
                    </form> */}
                </div>
            </div>
            <div className="text-center">
                <Link to="/manageInventory" className="btn btn-warning text-light">Manage Inventory</Link>
            </div>
        </div>
    );
};

export default ProductDetail;