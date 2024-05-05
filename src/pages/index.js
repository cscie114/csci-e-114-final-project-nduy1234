import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';
import {StaticImage} from 'gatsby-plugin-image';
   
const IndexPage = () => {
  return (
    <Layout pageTitle="My Favorite Films in 2024 So Far...">
      <div>
      <Link to= "/movielist">My Film List</Link><br/>
      <Link to= "/form">Comments about Film</Link><br/>
      <Link to= "/search">Search</Link>
      <p>This one is not a kung fu panda. It is a cute panda!</p>
      <StaticImage src="../images/photo-panda.jpeg" height={400} alt="photo-panda"></StaticImage>      
      </div>
      </Layout>
  )
}

export default IndexPage;
      
      
   
