import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailMovie } from '../../action'
import './index.css'

const Detail = ()=> {
    const { id } = useParams()
    console.log(id);
    const dispatch = useDispatch()
    const movieDetail = useSelector(state=>state.movieDetail)
    useEffect(()=>{
        dispatch(getDetailMovie(id))
    },[])
    console.log(movieDetail);
    return (
        <div style={{"min-height":"70.5vh"}}>
            <div className="container-detail">
            <div className="image">
                <img src={movieDetail.Poster} alt="" />
            </div>
            <div className="details">
                <h3>{movieDetail.Title}</h3>
                <p>{movieDetail.Year} | {movieDetail.Runtime} </p>
                <p>{movieDetail.Plot}</p>
            </div>
        </div>
        </div>
        
    )
}
export default Detail