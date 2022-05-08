import React from 'react';
import { Figure } from 'react-bootstrap';
import basundara from '../../utilities/Images/bashundhara.png'
import ceo from '../../utilities/Images/ceo.png'
import manager from '../../utilities/Images/manager.png'
import accounts from '../../utilities/Images/accounts.png'

const Employess = () => {
    return (
        <div className="container mt-5">
            <h3 style={{color: "#89C74A"}} className="text-center display-5">Our Employes</h3>
            <div className="row d-flex align-items-center">
                <div className="col-md-4 text-center">
                    <img style={{ width: "300px"}} className="img-fluid" src={ceo} alt="" />
                    <h4>CEO</h4>
                </div>
                <div  className="col-md-4 text-center">
                    <img style={{ width: "300px"}}  className="img-fluid" src={manager} alt="" />
                    <h4>MANAGER</h4>
                </div>
                <div className="col-md-4 text-center">
                    <img style={{ width: "300px"}}  className="img-fluid" src={accounts} alt="" />
                    <h4>CHEIF ACCOUNTS</h4>
                </div>
            </div>
        </div>
    );
};

export default Employess;