import React, { useState } from "react";
import {useForm} from "react-hook-form"
import {useSelector, useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { updateUserThunk } from "../../redux/Users/thunks";
import styles from "./updateUser.module.css"

const UpdateUser = () => {
    const [submited, setSubmited] = useState(false);
    const userSelector = useSelector((state) => state.users);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = userSelector.users.data.filter((user) => {
        const id = window.location.pathname.split("/")[2];
        return user._id === id;
    })[0];

    const {register, handleSubmit, formState: {errors},} = useForm({
        defaultValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            email: user.email
        }
    });

    const onSubmit = (data) => {
        data._id = user._id;
        dispatch(updateUserThunk(data));
        setSubmited(true);
    }


    if(userSelector.isLoading) {
        return(
            <h3>CARGANDO...</h3>
        )
    }

    if(submited){
        navigate("/users")
    }


    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className={styles.title}>FirstName</label>
                    <input type="text" id="firstName" 
                        {...register('firstName', {required: true, maxLength: 30})}
                    />
                    {errors.firstName && errors.firstName.type === "required" && (
                        <span>this field is required</span>
                    )}
                    {errors.firstName && errors.firstName.type === "maxLength" && (
                        <span>Max length: 30 characters</span>
                    )}
                </div>

                <div>
                    <label className={styles.title}>LastName</label>
                    <input type="text" id="lastName" 
                        {...register('lastName', {required: true, maxLength: 30})}
                    />
                    {errors.lastName && errors.lastName.type === "required" && (
                        <span>this field is required</span>
                    )}
                    {errors.lastName && errors.lastName.type === "maxLength" && (
                        <span>Max length: 30 characters</span>
                    )}
                </div>

                <div>
                    <label className={styles.title}>Age</label>
                    <input type="number" id="age" 
                        {...register('age', {required: true, min: 0})}
                    />
                    {errors.age && errors.age.type === "required" && (
                        <span>this field is required</span>
                    )}
                    {errors.age && errors.age.type === "min" && (
                        <span>Age cant be negative</span>
                    )}
                </div>

                <div>
                    <label className={styles.title}>Email</label>
                    <input type="text" id="email" 
                        {...register('email', {required: true,  pattern:{
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        }})}
                    />
                    {errors.email && errors.email.type === "required" && (
                        <span>this field is required</span>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <span>invalid email address</span>
                    )}
                </div>


                    <button type="submit" > 
                            Update
                    </button>

                </form>    
        </div>
    )

}

export default UpdateUser;