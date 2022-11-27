import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import UserItem from '../../components/UserItem/index'
import{ saveUsers } from "../../redux/Users/thunks"
import styles from "./user.module.css"


const Users = (props) => {
    
    const userSelector = useSelector((state) => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveUsers())
    }, [dispatch])

    
    if(userSelector.isLoading){
        return(
            <h3>LOADING....</h3>
        )
    }
    
        return (
          <div className="App">

            <h3>Lista de Usuarios</h3>

            <div className={styles.row}>
                {userSelector.users.data?.map((user) => {
                    return (
                        <div className={styles.column}>
                            <UserItem user={user} key={user._id + props.index} />
                        </div>
                    )
                })}
            </div>
        
          </div>
        )

    }

export default Users