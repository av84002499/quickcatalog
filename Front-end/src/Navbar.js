import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Example functions for opening and closing the navigation
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-0">
      <div className="container-fluid mainbar">
        <a className="navbar-brand js-scroll-trigger" href="Home">
          <img className="nav-logo-white img-fluid" src="../images/logo-white.png" alt="logo img" />
          <img className="nav-logo-black img-fluid" src="../images/logo-black.png" alt="logo img" />
        </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" onClick={openNav} aria-controls="mySidenav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse sidenav" id="mySidenav">
          <ul className="navbar-nav ms-auto my-0 my-md-2 my-lg-0">
            <li className="d-md-none d-lg-none">
              <a href="Home" className="closebtn" onClick={closeNav}>&times;</a>
            </li>
            <li className="nav-item">
             <Link className="nav-link js-scroll-trigger" to="/home">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/Signin">Sign in</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/Signup">Sign up</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
