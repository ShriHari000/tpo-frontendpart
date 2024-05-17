// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate, useParams } from "react-router-dom";

// function CrudDetailsAdmin() {
// 	const [crud, setCrud] = useState({});

// 	const { _id } = useParams();
// 	const navigate = useNavigate();

// 	useEffect(
// 		function () {
//             console.log("hi");
// 			async function getCrudById() {
// 				try {
// 					const response = await axios.get(`http://localhost:8080/api/cruds/detail/admin/${_id}`);

// 					setCrud(response.data);
// 				} catch (error) {
// 					console.log("error", error);
// 				}
// 			}
// 			getCrudById();
// 		},
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 		[]
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
// 			<h2>{crud.CompanyName}</h2>

// 			<p>
// 				<b>criteria:</b>: <a href={`tel:+${crud.criteria}`}> {crud.criteria} </a>
// 			</p>

// 			<p>
// 				<b>Email</b>: {crud.email}
// 			</p>
// 			<p>
// 				<b>address:</b>: {crud.address}
// 			</p>
// 			<p>
//             <b>package:</b>: {crud.package}
// 			</p>
// 			<p>
//             <b>skills:</b>: {crud.Rskills}			</p>
// 			{/* <p>
// 				<small>
// 					<b>ID</b>: {crud._id}
// 				</small>
// 			</p> */}
// 			{/* <div className="btn-group ">
// 				<Link to={`/cruds/${crud._id}/edit`} className="btn btn-primary">
// 					Edit
// 				</Link>
// 				<button onClick={handleDelete} className="btn btn-danger">
// 					Delete
// 				</button>
// 				<Link to="/cruds" className="btn btn-secondary">
// 					Close
// 				</Link>
// 			</div> */}
// 			<hr />
// 		</div>
// 	);
// }

// export default CrudDetailsAdmin;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate, useParams } from "react-router-dom";

// function CrudDetailsAdmin() {
//   const [crud, setCrud] = useState({});
//   const { _id } = useParams();
//   const navigate = useNavigate();

//   useEffect(
//     function () {
//       console.log("hi");
//       async function getCrudById() {
//         try {
//           const response = await axios.get(`http://localhost:8080/api/cruds/detail/admin/${_id}`);
//           setCrud(response.data);
//         } catch (error) {
//           console.log("error", error);
//         }
//       }
//       getCrudById();
//     },
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     []
//   );

//   async function handleDelete() {
//     try {
//       await axios.delete(`http://localhost:8080/api/cruds/${_id}`);
//       navigate("/cruds");
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className="container d-flex justify-content-center align-items-center min-vh-100">
//       <div className="card w-100 mx-auto" style={{ maxWidth: "600px" }}>
//         <div className="card-header bg-dark text-white text-center">
//           <h2>{crud.CompanyName}</h2>
//         </div>
//         <div className="card-body">
//           <form>
//             <div className="mb-3 text-center">
//               <label htmlFor="criteria" className="form-label fw-bold">
//                 Criteria:
//               </label>
//               <div className="text-primary">
//                 <a href={`tel:+${crud.criteria}`}>{crud.criteria}</a>
//               </div>
//             </div>
//             <div className="mb-3 text-center">
//               <label htmlFor="email" className="form-label fw-bold">
//                 Email:
//               </label>
//               <div className="text-success">{crud.email}</div>
//             </div>
//             <div className="mb-3 text-center">
//               <label htmlFor="address" className="form-label fw-bold">
//                 Address:
//               </label>
//               <div className="text-info">{crud.address}</div>
//             </div>
//             <div className="mb-3 text-center">
//               <label htmlFor="package" className="form-label fw-bold">
//                 Package:
//               </label>
//               <div className="text-warning">{crud.package}</div>
//             </div>
//             <div className="mb-3 text-center">
//               <label htmlFor="skills" className="form-label fw-bold">
//                 Skills:
//               </label>
//               <div className="text-danger">{crud.Rskills}</div>
//             </div>
//           </form>
//         </div>
       
//       </div>
//     </div>
//   );
// }

// export default CrudDetailsAdmin;





import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function CrudDetailsAdmin() {
  const [crud, setCrud] = useState({});
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(
    function () {
      console.log("hi");
      async function getCrudById() {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/cruds/detail/admin/${_id}`
          );
          setCrud(response.data);
        } catch (error) {
          console.log("error", error);
        }
      }
      getCrudById();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
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
      <div className="card w-100 mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-header bg-dark text-white text-center">
          <h2>{crud.CompanyName}</h2>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="criteria" className="form-label fw-bold">
                Criterias:
              </label>
              <div className="form-control">
                <a href={`tel:+${crud.criteria}`}>{crud.criteria}</a>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={crud.email}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label fw-bold">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={crud.address}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="package" className="form-label fw-bold">
                Package:
              </label>
              <input
                type="text"
                className="form-control"
                id="package"
                value={crud.package}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="skills" className="form-label fw-bold">
                Skills:
              </label>
              <input
                type="text"
                className="form-control"
                id="skills"
                value={crud.Rskills}
                readOnly
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CrudDetailsAdmin;