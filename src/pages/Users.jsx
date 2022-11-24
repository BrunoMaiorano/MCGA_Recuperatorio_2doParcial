import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import{ saveUsers } from "../redux/Users/thunks"


const Users = (props) => {
    
    const {users, isLoading} = useSelector((state) => state.users.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveUsers())
    }, [dispatch])

    console.log(users)
    
    if(isLoading === true){
        return(
          <p>cargando...</p>
        )
      } else {
        return (
          <div className="App">
          <h3>Lista de Usuarios</h3>
          {users?.map((user) => {
               return(
                <li key={user.id}>
                  <strong>{user.firstName}</strong> {" "}
                </li>
              )
            
          })}
      
          </div>
        )

    }
}
export default Users