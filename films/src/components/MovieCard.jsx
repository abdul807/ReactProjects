import React from 'react'
import {  useMovieContext } from '../context/MovieContext'
import './MovieCard.css'

const MovieCard = ({movie}) => {

    const { isFavorite,addTofavorite,removefavorite} = useMovieContext()

    const favorite = isFavorite(movie.id)

    const onFavoriteClick = (e) =>{
        e.preventDefault();
        if(favorite){
            removefavorite(movie.id)
            } else{
                addTofavorite(movie)
            }

    }

  

  return (
    <>
    <div className="movie-card">
        <div className="movie-poster">
            {/* <img src={movie.title} alt={movie.title} /> */}
            <div className="movie overlay">

            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split('-')[0]}</p>
        </div>

        <button type="button" className={`btn ${favorite? "active" : ""}`} onClick={onFavoriteClick} >
                    {favorite? "favorite" : "click me"}
                </button>

    </div>
    </>

  )
}

export default MovieCard
