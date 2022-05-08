import React, { useEffect, useState } from 'react';

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://ancient-basin-68398.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    return [inventories]
};

export default useInventories;