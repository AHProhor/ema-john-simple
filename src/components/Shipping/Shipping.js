import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const {user} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {console.log(data)};
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("Name")} />
                <input defaultValue = {user.email} {...register("Email", { required: true })} />
                <input placeholder="Address" {...register("Address", { required: true })} />
                <input placeholder="City" {...register("City", { required: true })} />
                <input placeholder="Phone Number" {...register("Phone Number", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;