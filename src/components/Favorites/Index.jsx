import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Home/Cards";
import './favorites.css'

const Favorites = ({remove, add})=>{
    const moviesFavorite = useSelector(state=> state.moviesFavorite)
    return (
        <div className="favorites">
            {moviesFavorite.length?<Cards movies={moviesFavorite} remove={remove} add={add}/>:'No hay ningún resultado'}
        </div>
    )
}

export default Favorites