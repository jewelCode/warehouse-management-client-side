import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddInventory = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://ancient-basin-68398.herokuapp.com/product", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
        // axios.post('https://ancient-basin-68398.herokuapp.com///product', data)
        // .then(response =>{
        //     console.log(response)
        // })
        alert('Product Added successfully')
        reset();

    };


    return (
        <div className="container bg-success text-center shadow mt-5 p-5 justify-content-center w-25">
            <h3 className="text-light">Add Your Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" placeholder="Product Name" {...register("name")} />
                <br />
                <input className="form-control" placeholder="Description" {...register("description")} />
                <br />
                <input className="form-control" placeholder="Supplier" {...register("supplier")} />
                <br />
                <input className="form-control" placeholder="Price" type="number" {...register("price", { required: true })} />
                <br />
                <input className="form-control" placeholder="Image Link" {...register("img")} />
                <br />
                <input className="form-control" placeholder="Quantity" type="number" {...register("quantity")} />
                <br />
                <input className="btn btn-warning" type="submit" value="Add New Items" />
                {errors.exampleRequired && <span>This field is required</span>}
            </form>

        </div>
    );
};

export default AddInventory;