import * as React from "react";
import './layout.module.css';
import { Link } from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

const Layout = ({ pageTitle, children }) => { 
  return (  
      <div>
      <header>
      <h1 className="title">My Movie List of 2024 <StaticImage src="../images/icon.png" height={50} alt="icon"></StaticImage></h1>
      <nav>
      <ul className="navLinkItem"> 
      <li><Link to="/">Home</Link></li>
      <li><Link to="/KungFuPanda4">Kung Fu Panda 4</Link></li>
      <li><Link to="/DunePartTwo">Dune: Part Two</Link></li>
      </ul>
      </nav>
      </header>    
      <main>
      <h2>{pageTitle}</h2>
        {children}
      </main>
      <footer>CSCIE-114, Web application development with Jamstack</footer>
      </div>  
  )
}

export default Layout;




  



  