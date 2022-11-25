import React, {useState} from "react";
import {set, useForm} from "react-hook-form"
import { useSelector, useDispatch } from "react-redux";
import { addUserThunk } from "../../redux/Users/thunks";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    
    const [submited, setSubmited] = useState(false)
    const userSelector = useSelector((state) => state.users)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        dispatch(addUserThunk(data))
        setSubmited(true)
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <label>FirstName</label>
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
                <label>LastName</label>
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
                <label>Age</label>
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
                <label>Email</label>
                <input type="text" id="email" 
                    {...register('email', {required: true})}
                />
                {errors.email && errors.email.type === "required" && (
                    <span>this field is required</span>
                )}
            </div>

            <button type="submit">
                    Create
                    
            </button>


        </form>    
    )
}

export default AddUser;