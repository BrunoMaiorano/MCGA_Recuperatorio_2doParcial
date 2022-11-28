import React from "react";
import styles from "./input.module.css"
import {register} from "react-hook-form"

const Input = ({ id, nameRegister,register, requiredMany, type, value }) => {
    return (
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.input}`}
          id={id}
          {...register(nameRegister, requiredMany)}
          type={type}
          value={value}
        />
      </div>
    );
  };
  
  export default Input;