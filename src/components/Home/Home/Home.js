import React from 'react';
import { Link } from 'react-router-dom';
import Employess from '../../Shared/Employees/Employess';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Suppliers from '../../Shared/Suppliers/Suppliers';
import InventoryItems from '../InvetoryItems/InventoryItems';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <InventoryItems></InventoryItems>
            <Suppliers></Suppliers>
            <Employess></Employess>
            <div className="text-center m-5">
                    <Link to="/manageInventory" className="btn btn-danger text-light">Manage Inventory</Link>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;