/* require("dotenv").config();
const fetch = require("node-fetch"); 


exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
  }) => {
   const { createNode } = actions
   try {
   const movieData= await getMovie();
   movieData.data.forEach(movie =>{
        createNode({
        ...movie,
        id: createNodeId(),
        parent: null,
        children: [],
        internal: {
            type: "Movie",   
            contentDigest: createContentDigest(movie),
        },
        });
    });
    } catch (error) {
    console.error('Error', error);
    }
    return;
    }
 
  async function getMovie() {
  const NODE_TYPE = `Movie`; 
    try { 
        const url = "http://www.omdbapi.com/?i=tt21692408&apikey=" + process.env.OMDB_API_KEY;     
        const movieData = await fetch(url, {
            duration: "1d",
            type: "json",   
    });  
    return movieData;                 
    } catch (error) {   
        console.error('Error', error);   
        console.log(error);       
    }   
    };*/


