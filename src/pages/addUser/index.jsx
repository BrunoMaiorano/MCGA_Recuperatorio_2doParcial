import React, {useState} from "react";
import {set, useForm} from "react-hook-form"
import { useSelector, useDispatch } from "react-redux";
import { addUserThunk } from "../../redux/Users/thunks";
import { Link, useNavigate } from "react-router-dom";
import styles from "./adduser.module.css"
import Input from "../../components/shared/Input/index";

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


    if(userSelector.isLoading) {
        return(
            <h3>Se esta creando...</h3>
        )
    }


    if(submited){
        navigate("/users")
    }
    
    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div>

              {/*   <Input
                    id={"first"}
                    nameRegister={"first"}
                    type={"text"}
                    requiredMany={ {required: true, maxLength: 30}}
                /> */}

                <label className={styles.title}>Nombre</label>
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
                <label className={styles.title}>Apellido</label>
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
                <label className={styles.title}>Edad</label>
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
                    {...register('email', {required: true, 
                    pattern:{
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
                        Create
                </button>



            </form>    
        </div>
    )
}

export default AddUser;