import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import UserItem from '../../components/UserItem/index'
import{ saveUsers } from "../../redux/Users/thunks"
import styles from "./user.module.css"


const Users = (props) => {
    
    const userSelector = useSelector((state) => state.users.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveUsers())
    }, [dispatch])

    console.log(userSelector)
    
        return (
          <div className="App">

            <h3>Lista de Usuarios</h3>

            <div className={styles.row}>
                {userSelector.data?.map((user) => {
                    return (
                        <div className={styles.column}>
                            <UserItem user={user} key={user._id} />
                        </div>
                    )
                })}
            </div>

        
          </div>
        )

    }

export default Users