import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProduct = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/product/${inventoryId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [inventoryId]);

    return [product];

};

export default useProduct;