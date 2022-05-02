import React, { useEffect, useState } from 'react';
import InventoryDetails from '../InventoryDetails/InventoryDetails';


const Inventory = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    inventories.map(inventory => <InventoryDetails inventory={inventory} key={inventory.id}></InventoryDetails>)
                }
            </div>
        </div>
    );
};

export default Inventory;