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

    return (
        <div className="container mt-5">

            <div className="row">
                <div className="col-md-9 text-center">
                    <h2>All Inventory Items</h2>
                    {
                        products.map(product => <div>
                            <Table striped bordered hover>
                                        <thead >
                                            <tr className="align-items-center">
                                                <th>Product Id</th>
                                                <th>Product Image</th>
                                                <th>Product Name</th>
                                                <th>Product Price</th>
                                                <th>Remove Product</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr className="align-items-center">
                                                <td>{product._id}</td>
                                                <td><img style={{width: "100px"}} src={product.img} alt="" /></td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td><Button variant="danger" onClick={() => handleDelete(product._id)}>Delete Product</Button></td>
                                            </tr>
                                        </tbody>
                            </Table>
                        </div>)
                    }

                </div>
                <div className="col-md-3">
                    <h2>Manage Inventory</h2>
                    <Link to="/addInventory">Add New Item</Link>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;