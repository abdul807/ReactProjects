import { createContext, useContext, useEffect, useState } from "react";



 const MovieContext = createContext();
 export const useMovieContext = ()=> useContext(MovieContext);



export const MovieProvider = ({children}) =>{
     

    const [favorites, setFavorite ] = useState([])

    useEffect(()=>{

        const storedFavorites = localStorage.getItem('favorites');
        if(storedFavorites){
            setFavorite(JSON.parse(storedFavorites))
            }
    },[])

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))

    },[favorites])



    const addTofavorite = (movie) =>{
        setFavorite(prev => [...prev, movie])
    }

    const removefavorite = (movieid) =>{
        setFavorite(favorites.filter(movie => movie.id !== movieid))
    }

    const isFavorite = (movieid) =>{
       return favorites.some(movie => movieid === movie.id)
    }




    const values = {
        favorites,
        isFavorite,
        addTofavorite,
        removefavorite
        
    }


    return (
    <MovieContext.Provider value ={values}>
        {children}
    </MovieContext.Provider>
    );

}