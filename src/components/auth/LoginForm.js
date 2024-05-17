import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  let studentData=null;
  let student=null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res=await axios
      .post(`http://localhost:8080/api/auth/login`, { email, password })
      .then(async (res) => 
      {
        console.log(res.data.user);
        // Get the user data from the response, including the role
        const userData = res.data.user;
        // Call the login function with the user data
        console.log('user',userData)
        console.log(userData.role)
        if(userData.role==='student' & userData.isRegistered)
        {
            console.log("Inside is")
            const email=userData.email
            console.log(email);
            try
            {
              studentData= await axios.get(`http://localhost:8080/api/cruds/get_std_email?email=${email}`);
              console.log('student data',studentData)
              student = studentData.data[0];
              console.log(student)
              login(userData,student);
              navigate('/');
              return;
            }
            catch(err)
            {
              console.log('Err',err)
              login(userData,student);
              return;
            }
        }
        else
        {
          if(userData.role==='admin')
            {
              login(userData,null);
              navigate('/');
            }
            else
            {
              console.log("Inside else")
              login(userData,null);
              navigate('/cruds/new');
            }
          
        }
        
      })
      .catch((err) => {
        console.log(err);
        alert('Login failed');
        navigate('/login')
      });
  };
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-4">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;