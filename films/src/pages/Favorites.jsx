import React from 'react'
import {  useMovieContext } from '../context/MovieContext'
import MovieCard from "../components/MovieCard";



const Favorites = () => {

    const { favorites}  = useMovieContext ();



        if(favorites.length ===0){
          return ( <div>
          <h1>No movies added yet</h1>
        </div>
          )

        }


    
        return (
            <div className="movie-grid">

             {favorites.map((movie)=>
                 <MovieCard  movie = {movie} key={movie.id}/>
             )}
        </div>

        )
        
     
      
      
    

      }



export default Favorites
