import React from "react";
import styles from "./userItem.module.css"
import {Link} from "react-router-dom"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserThunk } from "../../redux/Users/thunks";
import Button from "../shared/Button/index";

const UserItem = ({user}) => {
    const [deleted, setDeleted] = useState(false)
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteUserThunk(user._id))
        setDeleted(true)
    }

    if(deleted || user.isdeleted) {
        return null
    }

    return(
        <div className={styles.card}>
            <p className={styles.item}><strong>Nombre: </strong>{user.firstName}</p>
            <p className={styles.item}><strong>Apellido: </strong>{user.lastName}</p>
            <p className={styles.item}><strong>Edad: </strong>{user.age}</p>
            <p className={styles.item}><strong>Email: </strong>{user.email}</p>
            <button>
                <Link to={`/update/${user._id}`}>
                    <strong>Edit</strong> {" "}
                </Link>
            </button>

            <Button name="Delete" onClick={handleDelete} />
        </div>
    )

}

export default UserItem;