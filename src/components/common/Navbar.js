// import React, { useContext } from 'react';
// import { NavLink,Link } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';
// import logo from '../pages/img/DKTElogo.jpg'


// const Navbar = () => {
//   const { isAuthenticated, user, logout,studentData } = useContext(AuthContext);

//   console.log(isAuthenticated);
//   console.log(user);

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container">
//       <NavLink className="navbar-brand" to="/">
//           <img src={logo} alt="DKTE Logo" className="logo" /> {/* Add the logo image */}
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             {/* Common navbar items */}
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             {isAuthenticated ? (
//               <>
//                 {/* Navbar items for authenticated users */}
//                 {user.role === 'admin' && (
//                   <>
//                     {/* Navbar items for admins */}
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/curds/Adminnew">
//                         New Company
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/curds/cgpaFilter">
//                         Shorlist by CGPA
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/cruds/table-view">
//                         View students
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <button className="nav-link btn btn-link" onClick={handleLogout}>
//                         Logout
//                       </button>
//                     </li>
//                   </>
//                 )}
//                 {user.role === 'student' && (
//                   <>
//                     {
//                       studentData==null ? (
//                         <li className="nav-item">
//                           <Link className="nav-link" to="/cruds/new">
//                             Create Profile
//                           </Link>
//                         </li>
//                       ):(<></>)
//                     }
//                     {
//                       studentData!=null ? (<li className="nav-item">
//                           <Link className="nav-link" to={`/cruds/details/${studentData._id}`}>
//                               Show Profile
//                           </Link>
//                     </li>) : (<></>)
//                     }
                    
//                     <li className="nav-item">
//                       <Link className="nav-link" to="cruds/edit">
//                         Edit Profile
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link className="nav-link" to="/cruds/grid-view-company">
//                         Company List
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <button className="nav-link btn btn-link" onClick={handleLogout}>
//                         Logout
//                       </button>
//                     </li>
//                   </>
//                 )}
//               </>
//             ) : (
//               <>
//                 {/* Navbar items for unauthenticated users */}
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/signup">
//                     Sign Up
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import logo from '../pages/img/DKTElogo.jpg';

const Navbar = () => {
  const { isAuthenticated, user, logout, studentData } = useContext(AuthContext);

  console.log(isAuthenticated);
  console.log(user);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="DKTE Logo" className="img-fluid" style={{ height: '50px', opacity: '0.8' }} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Common navbar items */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                {/* Navbar items for authenticated users */}
                {user.role === 'admin' && (
                  <>
                    {/* Navbar items for admins */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/curds/Adminnew">
                        New Company
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/curds/cgpaFilter">
                        Shorlist by CGPA
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/cruds/table-view">
                        View students
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link btn btn-link" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </>
                )}
                {user.role === 'student' && (
                  <>
                    {studentData == null ? (
                      <li className="nav-item">
                        <Link className="nav-link" to="/cruds/new">
                          Create Profile
                        </Link>
                      </li>
                    ) : (
                      <></>
                    )}
                    {studentData != null ? (
                      <li className="nav-item">
                        <Link className="nav-link" to={`/cruds/details/${studentData._id}`}>
                          Show Profile
                        </Link>
                      </li>
                    ) : (
                      <></>
                    )}

                    <li className="nav-item">
                      <Link className="nav-link" to="cruds/edit">
                        Edit Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/cruds/grid-view-company">
                        Company List
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link btn btn-link" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </>
            ) : (
              <>
                {/* Navbar items for unauthenticated users */}
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;