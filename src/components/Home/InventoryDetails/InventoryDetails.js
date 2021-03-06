import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InventoryDetails = (props) => {
    const { _id, name, description, price, img, quantity, supplier } = props.inventory;
    const navigate = useNavigate();
    const handleInventoryDetail = id =>{
        navigate(`/inventory/${id}`);
    }

    return (
        <div className="col-md-4 col-sm-12 d-flex justify-content-center g-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Quantity: {quantity}</Card.Text>
                    <Card.Text>Price: {price}</Card.Text>
                    <Card.Text>Supplier: {supplier}</Card.Text>
                    <Button style={{backgroundColor: "#89C74A"}} onClick={()=> handleInventoryDetail(_id)} className="mt-auto border-0">Stock Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default InventoryDetails;