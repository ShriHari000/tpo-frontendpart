import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function CrudDetails(props) {
  const [crud, setCrud] = useState({});
  const { _id } = useParams();
  const navigate = useNavigate();

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

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card w-100 mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-header bg-dark text-white text-center">
          <h2>{crud.studentName}</h2>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-bold">
                Phone:
              </label>
              <div className="form-control">
                <a href={`tel:+${crud.phone}`}>{crud.phone}</a>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email:
              </label>
              <input type="email" className="form-control" id="email" value={crud.email} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="college" className="form-label fw-bold">
                College:
              </label>
              <input type="text" className="form-control" id="college" value={crud.College} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="cgpa" className="form-label fw-bold">
                CGPA:
              </label>
              <input type="text" className="form-control" id="cgpa" value={crud.CGPA} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="prn" className="form-label fw-bold">
                PRN:
              </label>
              <input type="text" className="form-control" id="prn" value={crud.PRN} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label fw-bold">
                DOB:
              </label>
              <input type="text" className="form-control" id="dob" value={crud.DOB} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="branch" className="form-label fw-bold">
                Branch:
              </label>
              <input type="text" className="form-control" id="branch" value={crud.Branch} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="ssc" className="form-label fw-bold">
                SSC:
              </label>
              <input type="text" className="form-control" id="ssc" value={crud.SSC} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="sscBoard" className="form-label fw-bold">
                SSC Board:
              </label>
              <input type="text" className="form-control" id="sscBoard" value={crud.SSCBOARD} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="hsc" className="form-label fw-bold">
                HSC:
              </label>
              <input type="text" className="form-control" id="hsc" value={crud.HSC} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="hscBoard" className="form-label fw-bold">
                HSC Board:
              </label>
              <input type="text" className="form-control" id="hscBoard" value={crud.HSCBOARD} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label fw-bold">
                City:
              </label>
              <input type="text" className="form-control" id="city" value={crud.City} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="skills" className="form-label fw-bold">
                Skills:
              </label>
              <textarea className="form-control" id="skills" value={crud.SKILLS} readOnly rows="3" />
            </div>
            <div className="mb-3">
              <label htmlFor="id" className="form-label fw-bold">
                ID:
              </label>
              <input type="text" className="form-control" id="id" value={crud._id} readOnly />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CrudDetails;