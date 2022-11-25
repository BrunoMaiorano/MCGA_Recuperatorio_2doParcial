import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import{ saveUsers } from "../redux/Users/thunks"


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
          {userSelector.data?.map((user) => {
               return(
                <li key={user._id}>
                  <strong>{user.firstName}</strong> {" "}
                </li>
              )
            
          })}
      
          </div>
        )

    }

export default Users