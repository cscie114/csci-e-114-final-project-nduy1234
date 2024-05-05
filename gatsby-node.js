require("dotenv").config();
const fetch = require("node-fetch"); 

const movieIDs = {
    "movie1": "tt21692408", 
    "movie2": "tt15239678", 
    "movie3": "tt8521778", 
    "movie4": "tt15009428"
  };
exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
  }) => {
   const { createNode } = actions;
   try {
   for (const movieID in movieIDs) {
   const movieData = await getMovie(movieIDs[movieID]);
        createNode({
        ...movieData,
        id: createNodeId(`${movieData.imdbID}`),
        parent: null,
        children: [],
        internal: {
            type: "Movie",   
            contentDigest: createContentDigest(movieData),
        },
        });
        }
} catch (error) {
  console.error('Error', error);
}
}
async function getMovie(imdbID) {
        try { 
            const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.OMDB_API_KEY}`;     
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
            }
            const movieData = await response.json();
            return movieData;
          } catch (error) {   
            console.error('Error', error);   
          }   
        }

  


        
        