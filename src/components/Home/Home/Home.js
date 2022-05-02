import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Inventory from '../Invetory/Inventory';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Inventory></Inventory>
            <Link to="/manageInventory">Manage Inventory</Link>
        </div>
    );
};

export default Home;