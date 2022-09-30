import React from "react";
import Card from "./Card";
import './Cards.css'

const Cards = ({movies, remove, add})=>{
    return (
        <div className="movies-box">
            {movies && movies[0] ?movies.map(movie=>{
                return(
                    <Card movie={movie} remove={remove} add={add}/>
                )
            }):'No hay resultados'}
        </div>
    )
}
export default Cards