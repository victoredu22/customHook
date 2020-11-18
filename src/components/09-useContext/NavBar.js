import React from 'react'
import {Link,NavLink} from 'react-router-dom';

export const NavBar = () => {
  return (


    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">


    <Link to="/" className="navbar-brand" href="#">useContext</Link>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink exact activeClassName="active" className="nav-link" to="./" >Home <span className="sr-only">(current)</span></NavLink>
        <NavLink exact activeClassName="active" className="nav-link" to="./about">about</NavLink>
        <NavLink exact activeClassName="active" className="nav-link" to="./login">login</NavLink>
      
      </div>
    </div>
    </nav>
  )
}
