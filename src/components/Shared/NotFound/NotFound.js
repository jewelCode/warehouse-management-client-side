import React from 'react';
import error from '../../utilities/Images/404.png'

const NotFound = () => {
    return (
        <div className="text-center mt-5">
            <img src={error} alt="" />
            <h2>Oops! This Page is Not Found.</h2>
            <p><small>The requested page dose not exist.</small></p>
            <button className="btn btn-primary">Back To Home</button>
        </div>
    );
};

export default NotFound;