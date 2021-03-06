import React from 'react';
import useInventories from '../../hooks/useInventories';

import InventoryDetails from '../InventoryDetails/InventoryDetails';


const InventoryItems = () => {
    const [inventories] = useInventories();
    return (
        <div className="container mt-5">
            <h3 style={{ color: "#89C74A" }} className="text-center display-5">Our Products</h3>
            <div className="row">
                {
                    inventories.slice(0, 6).map(inventory => <InventoryDetails inventory={inventory} key={inventory._id}></InventoryDetails>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;