import * as React from "react";
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const Movielist = ({ data }) => {
const movies = data.allMovie.nodes;
return (
        <Layout pageTitle="My Film List">
        <ul>
        {movies.map((movie) => {
        return (
        <li key= {movie.id}> 
        <Link to={"/movies/"+ movie.id}>{movie.Title}
        </Link>
        </li>) 
        })} 
      </ul>   
      </Layout>
  )
}
   
export const query = graphql`
              query MyQuery { 
              allMovie {          
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
             } 
    `

    export default Movielist;