import * as React from "react";
import '../../style.css';
import { Link } from 'gatsby';

const Layout = ({ pageTitle, children }) => { 
  return (  
      <div>
      <header>
      <h1 className="title">My Movie List of 2024</h1>
      <nav>
      <ul className="navLinkItem"> 
      <li><Link to="/">Home</Link></li>
      <li><Link to="/movielist">My Film List</Link></li>
      <li><Link to="/form">Comments about Film</Link></li>
      <li><Link to="/search">Search</Link></li>
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




  



  