import React from "react";
import Cards from "./Cards";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { getMovies } from "../../action";
import './Home.css'


const Home = ({remove, add})=>{
    const movies = useSelector(state=> state.moviesLoaded)
    if(movies && movies[0])console.log(movies);
    return (
        <div className="container">
            {movies.length?<Cards movies={movies[0].Search} remove={remove} add={add}/>:'Esto es Home'}
        </div>
    )
}
export default Home