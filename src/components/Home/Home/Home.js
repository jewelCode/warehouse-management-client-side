import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import InventoryItems from '../InvetoryItems/InventoryItems';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <InventoryItems></InventoryItems>
            <Link to="/manageInventory">Manage Inventory</Link>
        </div>
    );
};

export default Home;