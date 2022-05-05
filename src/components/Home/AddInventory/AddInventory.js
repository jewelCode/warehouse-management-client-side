import React from 'react';
import { useForm } from 'react-hook-form';

const AddInventory = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/product", {
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
            
    };


    return (
        <div>
            <h3>This is Add Inventory Page</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Product Name" {...register("name")} />
                <br /><br />
                <input placeholder="Description" {...register("description")} />
                <br /><br />
                <input placeholder="Supplier" {...register("supplier")} />
                <br /><br />
                <input placeholder="Price" type="number" {...register("price", { required: true })} />
                <br /><br />
                <input placeholder="Image Link" {...register("img")} />
                <br /><br />
                <input placeholder="Quantity" type="number" {...register("quantity")} />
                <br /><br />
                <input type="submit" value="Add New Items" />
                {errors.exampleRequired && <span>This field is required</span>}
            </form>

        </div>
    );
};

export default AddInventory;