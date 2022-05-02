import React from 'react';
import { useForm } from 'react-hook-form';


const ManageInventory = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div>
            
            <div className="row">
                <div className="col-md-9 text-center">
                    <h2>All Inventory Items</h2>
                </div>
                <div className="col-md-3">
                    <h2>Manage Inventory</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Product Name" {...register("example")} />
                        <br />
                        <input {...register("exampleRequired", { required: true })} />
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" value="Add New Items" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;