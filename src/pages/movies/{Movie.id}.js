import * as React from "react"
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import Movie from '../../components/movie'

const MoviePage = ({ data }) => {
const {allMovie} = data;
const movie = allMovie.nodes[0];
    return (
        <Layout pageTitle={movie.Title}>
        <div>
        <Movie movie={movie}></Movie>    
        </div>
        </Layout>
    )
  }

export const query = graphql`
query ($id: String) {
    allMovie(filter: {id: {eq: $id}}) {
            nodes {
                id          
                Title            
                Poster              
                Released             
                Genre
                Director             
                Writer                                  
                Actors       
                Plot        
          }
      }
  }`


export default MoviePage;

