import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const ManageInventory = () => {
    
    return (
        <div className="container mt-5">
            
            <div className="row">
                <div className="col-md-9 text-center">
                    <h2>All Inventory Items</h2>
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