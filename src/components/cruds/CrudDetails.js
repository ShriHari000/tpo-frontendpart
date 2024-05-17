// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

// function CrudDetails(props) {
// 	const [crud, setCrud] = useState({});

// 	const { _id } = useParams();
// 	const navigate = useNavigate();

// 	const {studentData} = useContext(AuthContext)
// 	useEffect(
// 		function () {
// 			async function getCrudById() {
// 				try {
// 					const response = await axios.get(`http://localhost:8080/api/cruds/${_id}`);
// 					setCrud(response.data);
// 				} catch (error) {
// 					console.log("error", error);
// 				}
// 			}
// 			getCrudById();
// 		},
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 		[props]
// 	);

// 	async function handleDelete() {
// 		try {
// 			await axios.delete(`http://localhost:8080/api/cruds/${_id}`);
// 			navigate("/cruds");
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}

// 	return (
// 		<div className="container">
// 			<h2>{studentData.studentName}</h2>

// 			<p>
// 				<b>Phone</b>: <a href={`tel:+${crud.phone}`}> {studentData.phone} </a>
// 			</p>

// 			<p>
// 				<b>Email</b>: {studentData.email}
// 			</p>
// 			<p>
// 				<b>College</b>: {studentData.College}
// 			</p>
// 			<p>
// 				<b>Link</b> :
// 				<a href={` ${studentData.CGPA}`} target="_blank" rel="noreferrer">
// 					{studentData.CGPA}
// 				</a>
// 			</p>
// 			<p>
// 				<b>SKIILS</b>: <p align="justify">{studentData.SKIILS}</p>
// 			</p>
// 			<p>
// 				<small>
// 					<b>ID</b>: {studentData._id}
// 				</small>
// 			</p>
// 			<div className="btn-group ">
// 				<Link to={`/cruds/${studentData._id}/edit`} className="btn btn-primary">
// 					Edit
// 				</Link>
// 				<button onClick={handleDelete} className="btn btn-danger">
// 					Delete
// 				</button>
// 				<Link to="/cruds" className="btn btn-secondary">
// 					Close
// 				</Link>
// 			</div>
// 			<hr />
// 		</div>
// 	);
// }

// export default CrudDetails;




import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function CrudDetails(props) {
  const [crud, setCrud] = useState({});
  const { _id } = useParams();
  const navigate = useNavigate();
  const { studentData } = useContext(AuthContext);

  useEffect(
    function () {
      async function getCrudById() {
        try {
          const response = await axios.get(`http://localhost:8080/api/cruds/${_id}`);
          setCrud(response.data);
        } catch (error) {
          console.log("error", error);
        }
      }
      getCrudById();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props]
  );

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:8080/api/cruds/${_id}`);
      navigate("/cruds");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card w-100 mx-auto" style={{ maxWidth: "600px", backgroundColor: "#f8f9fa" }}>
        <div className="card-header bg-primary text-white text-center">
          <h2>{studentData.studentName}</h2>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">Phone:</div>
            <div className="col-9 text-success">{studentData.phone}</div>

          </div>
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">Email:</div>
            <div className="col-9 text-success">{studentData.email}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">College:</div>
            <div className="col-9 text-info">{studentData.College}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">CGPA:</div>
            <div className="col-9 text-warning">{studentData.CGPA}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">PRN:</div>
            <div className="col-9 text-danger">{studentData.PRN}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">DOB:</div>
            <div className="col-9">{studentData.DOB}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">Branch:</div>
            <div className="col-9">{studentData.Branch}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">SSC:</div>
            <div className="col-9">{studentData.SSC}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">SSC Board:</div>
            <div className="col-9">{studentData.SSCBOARD}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">HSC:</div>
            <div className="col-9">{studentData.HSC}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">HSC Board:</div>
            <div className="col-9">{studentData.HSCBOARD}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">City:</div>
            <div className="col-9">{studentData.City}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">Skills:</div>
            <div className="col-9">
              <p className="mb-0">{studentData.SKILLS}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3 fw-bold text-secondary">ID:</div>
            <div className="col-9">{studentData._id}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrudDetails;