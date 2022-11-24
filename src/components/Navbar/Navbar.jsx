//vamos a crear enlaces para la navBar, para eso usamos el componente
//link de reacRouter

import { Link, useNavigate } from "react-router-dom"
//useNavigate sirve para hacer redirencciones

import { useState } from "react";

const Navbar = () => {
    
    const [keyword, setKeyword] = useState("");
    
    const navigate = useNavigate();
   
    const handleSubmit = e => {
        e.preventDefault();
        setKeyword("");
        e.target.reset();
        navigate(`/search?keyword=${keyword}`);
    }


    return(
        <div>
            <hr />
            <Link to="/home">Home</Link> {" "}
            <Link to="/about">About</Link> {" "}
            <Link to="/users">Users</Link> {" "}
            <Link to="/add" >Add User</Link> {" "}

            <form 
             onSubmit={handleSubmit}
             style={{display: "inline-flex"}}>

                <input 
                    type="text" 
                    placeholder="Search" 
                    defaultValue={keyword}
                    onChange={e => setKeyword(e.target.value)}
                    /> 

                <button type="submit">Find!</button>
            </form>
            <hr />
        </div>
    )
}

export default Navbar