import React from "react";
import { Link, useParams , NavLink} from "react-router-dom";
import './NavBar.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../action";
import { useSelector } from "react-redux";

const NavBar = ()=>{
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    
    const movies  = useSelector(state=> state.moviesLoaded)

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getMovies(input))
    }
    return (
        <header className="navbar">
            <div>
                PROYECTO API
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <Link exact to="/" >Home</Link>
                        <Link to="/favorites" >Favoritas</Link>
                    </li>
                    <form className="list-item" onSubmit={handleSubmit}>
                    <li className="list-item">
                        <input value={input} type="text" onChange={handleChange}/>
                    </li>
                    <li className="list-item" >
                        {/* <NavLink to='/'> */}
                        <input type="submit" value='Search'/>
                        {/* </NavLink> */}
                    </li>
                    </form>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar