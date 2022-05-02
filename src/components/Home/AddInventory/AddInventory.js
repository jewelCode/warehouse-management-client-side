import React from 'react';
import { useForm } from 'react-hook-form';

const AddInventory = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div>
            <h3>This is Add Inventory Page</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Id" {...register("example")} />
                        <br /><br />
                        <input placeholder="Product Name" {...register("example")} />
                        <br /><br />
                        <input placeholder="Description" {...register("example")} />
                        <br /><br />
                        <input placeholder="Image Link" {...register("example")} />
                        <br /><br />
                        <input placeholder="Price"  {...register("exampleRequired", { required: true })} />
                        <br /><br />
                        <input type="submit" value="Add New Items" />
                        {errors.exampleRequired && <span>This field is required</span>}
            </form>
          
        </div>
    );
};

export default AddInventory;