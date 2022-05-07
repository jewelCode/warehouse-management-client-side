import React from 'react';
import basundara from '../../utilities/Images/bashundhara.png'
import fresh from '../../utilities/Images/freshpng.png'
import meghna from '../../utilities/Images/meghna.png'
import aci from '../../utilities/Images/aci.png'

const Suppliers = () => {
    return (
        <div className="container mt-5">
            <h3 style={{color: "#89C74A"}} className="text-center display-5">Our Suppliers</h3>
            <div className="row d-flex align-items-center">
                <div className="col-md-3">
                    <img className="img-fluid" src={basundara} alt="" />
                </div>
                <div className="col-md-3">
                    <img className="img-fluid" src={fresh} alt="" />
                </div>
                <div className="col-md-3">
                    <img className="img-fluid" src={meghna} alt="" />
                </div>
                <div className="col-md-3">
                    <img className="img-fluid" src={aci} alt="" />
                </div>
            </div>
        </div>
        );
};

export default Suppliers;