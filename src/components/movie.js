import * as React from "react"
import '../../style.css'
 
const Movie = ({movie}) =>{  
  return (
    <div>  
    <img src={movie.Poster} alt={movie.Title}/>
    <p>Released: {movie.Released}</p>
    <p>Genre: {movie.Genre}</p>
    <p>Director: {movie.Director}</p>
    <p>Writer: {movie.Writer}</p>
    <p>Actors: {movie.Actors}</p>
    <p>Plot: {movie.Plot}</p>
    </div>
  )
} 

export default Movie;