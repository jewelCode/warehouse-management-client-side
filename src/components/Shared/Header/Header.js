import React from 'react';
import './Header.css';
import background from '../../utilities/Images/car.jpg'

const Header = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h1 className="display-1">CAR HEAVEN</h1>
                    <h1 className="display-4">A Perfect Solution For Your Choice</h1>
                    
                </div>
                <div className="col-md-6">
                    <img style={{width: "100%"}} src={background} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;