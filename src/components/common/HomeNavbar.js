// import React from "react";
// import { NavLink } from "react-router-dom";

// const HomeNavbar = () => {
// 	return (
// 		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// 			<div className="container">
// 				<NavLink className="navbar-brand" hrefLang="https://henok.us" to="/">
// 					DKTE
// 				</NavLink>
// 				<button
// 					className="navbar-toggler collapsed"
// 					type="button"
// 					data-bs-toggle="collapse"
// 					data-bs-target="#mobileMenu"
// 					aria-controls="mobileMenu"
// 					aria-expanded="false"
// 					aria-label="Toggle navigation"
// 				>
// 					<span className="toggler-icon top-bar"></span>
// 					<span className="toggler-icon middle-bar"></span>
// 					<span className="toggler-icon bottom-bar"></span>
// 				</button>
// 				<div className="collapse navbar-collapse" id="mobileMenu">
// 					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
// 						<li className="nav-item">
// 							<NavLink
// 								className="nav-link"
// 								activeClassName="active"
// 								to="/login"
// 							>
// 								Login
// 							</NavLink>
// 						</li>
// 						<li className="nav-item">
// 							<NavLink
// 								className="nav-link"
// 								activeClassName="active"
// 								to="/signup"
// 							>
// 								SignUP
// 							</NavLink>
// 						</li>
						
// 					</ul>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

// export default HomeNavbar;


import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "./path/to/logo.png"; // Import the logo image
import logo from '../pages/img/dkte.jpg'


const HomeNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="DKTE Logo" className="logo" /> {/* Add the logo image */}
        </NavLink>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="mobileMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/signup">
                SignUP
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;