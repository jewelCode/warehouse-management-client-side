import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const proceedDelete = window.confirm("Are you sure you want to delete your product?");
        if (proceedDelete) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const productsRemaining = products.filter(product => product._id !== id);
                    setProducts(productsRemaining)
                })
        }
    }

    return (
        <div className="container mt-5">

            <div className="row">
                <div className="col-md-9 text-center border p-3">
                    <h2 className="text-light bg-warning p-3">All Products</h2>
                    {
                        products.map(product => <div>
                            <Table striped bordered hover>
                                <thead >
                                    <tr className="align-items-center text-success">
                                        <th>Product Image</th>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th>Product Quantity</th>
                                        <th>Remove Product</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr className="align-items-center">
                                        <td><img style={{ width: "100px" }} src={product.img} alt="" /></td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td><Button variant="danger" onClick={() => handleDelete(product._id)}>Delete Product</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>)
                    }

                </div>
                <div className="col-md-3 border text-center">
                    <h2 className="text-light p-3 bg-warning mt-3">Manage Inventory</h2>
                    <Link className="btn btn-success mt-5" to="/addInventory">Add New Item</Link>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;