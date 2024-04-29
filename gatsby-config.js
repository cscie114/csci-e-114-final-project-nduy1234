/** 
 * @type {import('gatsby').GatsbyConfig} 
 */ 

module.exports = {
    siteMetadata: {
      title: `final project`,
      description: `project`,
      siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-transformer-json`,
      `gatsby-transformer-remark`,
      
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 1200,
        },  
      },
       
    ]
  };
  