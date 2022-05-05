import React from 'react';
import './Header.css';
import header from '../../utilities/Images/header.png'

const Header = () => {
    return (
        <div className="container" style={{backgroundColor: "#89C74A"}}>
            <div className="row d-flex align-items-center">
                <div className="col-md-6 p-5 col-sm-12">
                    <h1 className="display-1 text-light">FAMILY SUPERMARKET</h1>
                    <h1 className="display-6 text-light">A BEST QUALITY SUPERSHOP</h1>
                </div>
                <div className="col-md-6 col-sm-12 text-center">
                    <img style={{width: "100%"}} src={header} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;