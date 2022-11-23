import './App.css';
/* import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import{ saveUsers } from "./redux/Users/thunks" */
import Home from "./pages/Home"
import About from "./pages/About"
import Users from "./pages/Users"

import {Routes, Route} from "react-router-dom"
import Layout from './components/Layout';


/* function App(props) {
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
    );
  }
} */



function App(){
  return(
    <div className='App'>
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path='home' element={<Home />} /> 
          <Route path='about' element={<About />} />
          <Route path='users' element={<Users />} />
        </Route>
      </Routes>



    </div>
  ) 
}

export default App;
