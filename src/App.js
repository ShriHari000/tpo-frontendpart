// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/common/Navbar";
// import Home from "./components/pages/Home";
// import CrudAdd from "./components/cruds/CrudAdd";
// import AddAdmin from "./components/cruds/AddAdmin";
// import CgpaFilter from "./components/cruds/CgpaFilter";
// import FilterView from "./components/cruds/FilterView";

// import CrudTable from "./components/cruds/CrudTable";
// import CrudListView from "./components/cruds/CrudListView";
// import CrudGridView from "./components/cruds/CrudGridView";
// import CrudDetails from "./components/cruds/CrudDetails";
// import CrudEdit from "./components/cruds/CrudEdit";
// import CrudDelete from "./components/cruds/CrudDelete";
// import Footer from "./components/common/Footer";
// import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
// import { AuthProvider } from "./context/AuthProvider";


// function App() {
// 	return (
// 		<div className="App">
// 			<AuthProvider>
// 				<Router>
// 					<Navbar/>
// 					<Routes>
// 						<Route exact path="/" element={<Home />} />
// 						<Route exact path="/login" element={<LoginForm />} />
// 						<Route exact path="/signup" element={<SignUpForm />} />
// 						<Route exact path="/api/" element={<Home />} />
// 						<Route exact path="/cruds" element={<CrudTable />} />					
// 						<Route exact path="/cruds/list-view" element={<CrudListView />} />
// 						<Route exact path="/cruds/grid-view" element={<CrudGridView />} />
// 						<Route exact path="/cruds/new" element={<CrudAdd />} />
// 						<Route exact path="/cruds/:_id" element={<CrudDetails />} />
// 						<Route exact path="/cruds/:_id/edit" element={<CrudEdit />} />
// 						<Route exact path="/cruds/:_id/delete" element={<CrudDelete />} />
// 						<Route exact path="/curds/Adminnew" element={<AddAdmin />} />
// 						<Route exact path="/curds/cgpaFilter" element={<CgpaFilter />} />
// 					</Routes>
// 				</Router>
// 			</AuthProvider>
			
// 		</div>
// 	);
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/pages/Home';
import CrudAdd from './components/cruds/CrudAdd';
import AddAdmin from './components/cruds/AddAdmin';
import CgpaFilter from './components/cruds/CgpaFilter';
import CrudEdit from "./components/cruds/CrudEdit";
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import CrudGridView from './components/cruds/CrudGridView';
import CrudTable from './components/cruds/CrudTable';
import CrudDetails from './components/cruds/CrudDetails';
import CrudDetailsAdmin from './components/cruds/CrudDetailAdmin';
import ViewStudentAdmin from './components/cruds/ViewStudentAdmin';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route
              path="/curds/Adminnew"
              element={
                <ProtectedRoute component={AddAdmin} roles={['admin']} />
              }
            />
            <Route
              path="/curds/cgpaFilter"
              element={
                <ProtectedRoute component={CgpaFilter} roles={['admin']} />
              }
            />
             <Route
              path="/cruds/table-view"
              element={
                <ProtectedRoute component={CrudTable} roles={['admin']} />
              }
            />
            <Route
              path="/cruds/details/admin/:_id"
              element={
                <ProtectedRoute
                  component={ViewStudentAdmin}
                  roles={'admin'}
                />
              }
            />

            {/* Studnet protected routes */}
            <Route
              path="/cruds/new"
              element={
                <ProtectedRoute
                  component={CrudAdd}
                  roles={'student'}
                />
              }
            />
            <Route
              path="cruds/edit"
              element={
                <ProtectedRoute
                  component={CrudEdit}
                  roles={'student'}
                />
              }
            />
            <Route
              path="/cruds/grid-view-company"
              element={
                <ProtectedRoute
                  component={CrudGridView}
                  roles={'student'}
                />
              }
            />

            <Route
              path="/cruds/:_id/temp"
              element={
                <ProtectedRoute
                  component={CrudDetailsAdmin}
                  roles={'student'}
                />
              }
            />


            <Route
              path="/cruds/details/:_id"
              element={
                <ProtectedRoute
                  component={CrudDetails}
                  roles={'student'}
                />
              }
            />
            {/* Add more protected routes as needed */}

            <Route path='*' element={<div>Page not found</div>}/>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;