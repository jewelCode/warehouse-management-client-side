import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // const getProducts = async () => {
        //     const email = user.email;
        //     const url = `http://localhost:5000/myitems?email=${email}`;
        //     const { data } = await axios.get(url);
        //     setProducts(data)
        // }
        // getProducts();

        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user]);

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
            toast("product is deleted")
        }


    }
    return (
        <div className="container mt-5">
            <h3 style={{ color: "#89C74A" }} className="text-center display-5">My Items:{products.length}</h3>
            <div className="row">
                {products.map(product =>
                    <div className="col-md-3 col-sm-12 d-flex justify-content-center g-5">

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>Quantity: {product.quantity}</Card.Text>
                                <Card.Text>Price: {product.price}</Card.Text>
                                <Card.Text>Supplier: {product.supplier}</Card.Text>
                                <Button variant="danger" onClick={() => handleDelete(product._id)}>Delete Product</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
};
export default MyItems;