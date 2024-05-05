import * as React from "react";
import { Link, graphql } from 'gatsby';
import { useState } from "react";
import Layout from '../components/layout';
    
const normalNode = (node) => {
    return {
        ...node,
        name: node.name?node.name.toLowerCase():'',
        TitleNorm: node.Title?node.Title.toLowerCase():'',       
        }
    }
const matchNode = (node, terms) => {
    const {name, TitleNorm} = node;
    return name.includes(terms) || TitleNorm.includes(terms) 
    }
const filterNodes = (nodes, terms) => {
    if(!terms || terms.length === 0) {
    return nodes;
    }
    terms = terms.toLowerCase();
    return nodes.map(normalNode).filter((node) => matchNode(node, terms));
} 
    
const SearchPage = ({data}) => {
const [terms, setTerms] = useState(null);
const handleSearch = (e) => setTerms(e.target.value);
const nodes = data.allMovie.nodes;
const matches = filterNodes(nodes, terms);
    return (
    <Layout pageTitle="Search">  
    <div className="searchBox">
    <input type="search" onChange={handleSearch}/>
    </div>
    <div>
    {terms && <p>{matches.length} results out of {nodes.length}</p>}
    </div>
    <ul> 
    {matches.map((node) => {
    return (
    <li key={node.id}> 
    <Link to={"/movies/"+ node.id}>{node.Title}</Link>
    </li>
    )
    })}
    </ul> 
    </Layout> 
    );
    };
        
export const query = graphql`
                query { 
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
`;

export default SearchPage;