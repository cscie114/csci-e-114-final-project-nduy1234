/*import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
//import { OMDB_API_KEY } from '../env';
require("dotenv").config();
//const fetch = require("node-fetch"); 

const MoviePage = () => { 
const [movie, setMovie] = useState({});

useEffect(() => { 
const fetchData = async () => { 
try {
    const OMDB_API_KEY = process.env.OMDB_API_KEY; 
    const url = `http://www.omdbapi.com/?i=tt15239678&apikey=${OMDB_API_KEY}`; 
    const response = await fetch(url); 
    const data = await response.json(); 
    setMovie(data); 
    } catch (error) { 
    console.error('Error', error); 
    } 
}; 
fetchData(); 
},); 

return ( 
<Layout>
<div> 
<h1>{movie.Title}</h1> 
<img src={movie.Poster}/> 
<p>Released: {movie.Released}</p> 
<p>Genre: {movie.Genre}</p> 
<p>Director: {movie.Director}</p> 
<p>Writer: {movie.Writer}</p> 
<p>Actors: {movie.Actors}</p> 
<p>Plot: {movie.Plot}</p> 
<p>Language: {movie.Language}</p> 
</div> 
</Layout>
); 
}; 

export default MoviePage;*/
