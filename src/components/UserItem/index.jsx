import React from "react";
import styles from "./userItem.module.css"
import {Link} from "react-router-dom"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserThunk } from "../../redux/Users/thunks";

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
            <Link>
                <strong>Edit</strong> {" "}
            </Link>
            <button onClick={handleDelete}>
                delete
            </button>
        </div>
    )

}

export default UserItem;