import React, { useState } from "react";
import { post } from "axios";
import { Link,useNavigate,useParams } from "react-router-dom";

function AddAdmin(props) {
	const initialState = {
		CompanyName: "",
		criteria: "",
		email: "",
		address: "",
		package: "",
		Rskills: "",
        about:"",
	};
	const [crud, setCrud] = useState(initialState);

    const { _id } = useParams();
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		//if (!crud.companyName || !crud.email) return;
		async function postCrud() {
			try {
				console.log(crud)
				const response = await post(`http://localhost:8080/api/cruds/admin`, crud);
				// navigate(`/cruds/${response.data._id}`);
			} catch (error) {
				console.log("error", error);
			}
		}
		postCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate("/cruds");
	}

	return (
        
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Add company</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">    
					<label>company Name</label>
					<input
						name="CompanyName"
						type="text"
						required
						value={crud.CompanyName}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>criteria</label>
					<input
						name="criteria"
						type="text"
						required
						value={crud.criteria}
						onChange={handleChange}
						className="form-control"
					/>
					
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						name="email"
						type="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
						required
						value={crud.email}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>address</label>
					<input
						name="address"
						type="text"
						required
						value={crud.address}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>package</label>
					<input
						name="package"
						type="text"
						value={crud.package}
						onChange={handleChange}
						className="form-control"
					/>
					
				</div>

				<div className="form-group">
					<label>Skills</label>
					<textarea
						name="Rskills"
						row="10"
						value={crud.Rskills}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

                <div className="form-group">
					<label>about</label>
					<textarea
						name="about"
						row="10"
						value={crud.about}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="btn-group">
					<input type="submit" value="Submit" className="btn btn-primary" />
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddAdmin;


///FaA6CoxjFSyIf83n