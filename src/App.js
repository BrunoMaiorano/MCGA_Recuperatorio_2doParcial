import './App.css';

import Home from "./pages/Home"
import About from "./pages/About"
import Users from "./pages/Users/Users"
import AddUser from './pages/addUser/index';
import UpdateUser from './pages/updateUser/index';

import {Routes, Route} from "react-router-dom"
import Layout from './components/Layout';



function App(){
  return(
    <div className='App'>
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path='home' element={<Home />} /> 
          <Route path='about' element={<About />} />
          <Route path='users' element={<Users />} />
          <Route path='add' element={<AddUser />} />
          <Route path='update/:id' element={<UpdateUser />} />
        </Route>
      </Routes>



    </div>
  ) 
}

export default App;
