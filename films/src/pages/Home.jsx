import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";



const Home = () => {

    const [err, setErr] = useState("")
    const [movies, setMovie] = useState([]);
    const [search, setSearch] = useState('')
    const [loading, setloading] = useState(true)


    useEffect(()=>{
        const loadpopularmovies = async () =>{
            try {
                const response = await getPopularMovies();
                // console.log(response)
                setMovie(response)
                
            } catch (error) {
                setErr(error)
            }

        }
        loadpopularmovies()
    }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!search.trim()) return 


    try {

        const searchedMovie = await searchMovies(search);
        console.log(searchedMovie)
        setMovie(searchedMovie)
        setloading(false)


        
    } catch (err) {
        setErr(err)
        console.log(err)
        
    }finally{
        setloading(false)
    }
  
   
   
  };
  return (
    <div>
      <div className="home">
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="search for movieeee"
            value={search}
            onChange={(e)=> {
                setSearch(e.target.value)}}
          />
          <button className=" btn-outline-success my-2 my-sm-0">
            Search
          </button>
        </form>

        <div className="movie-grid">

            {movies.map((movie)=>
                <MovieCard  movie = {movie} key={movie.id}/>
            )}
        
        </div>
      </div>
    </div>
  );
};

export default Home;
