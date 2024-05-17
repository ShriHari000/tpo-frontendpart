import React, { useEffect, useState } from "react";
import axios, { get } from "axios";
import { useNavigate,useParams,Link} from "react-router-dom";


function CgpaFilter(props) {
	const initialState = {
		studentName: "",
		phone: "",
		email: "",
		College: "",
		CGPA: "",
		SKIILS: "",
	};

    const { _id } = useParams();

	const [crud, setCrud] = useState(initialState);

    const [arr,setarr] = useState([]);


	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		//if (!crud.companyName || !crud.email) return;
		async function postCrud() {
			try {
				
                console.log(crud.CGPA);
				const response = await get(`http://localhost:8080/api/cruds/filter-view/${crud.CGPA}`);
                console.log('Response',response);

				setarr(response.data);
				
				
			} catch (error) {
				console.log("error", error);
			}
		}

		postCrud();
	}

	
	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	const baseUrl = "http://localhost:8080";
	
	const [semail, setsEmail] = useState([]);
	const [subject, setSubject] = useState("");

	useEffect(()=>{
		const extractedEmails = arr.map(obj => obj.email);
		setsEmail(extractedEmails);

		setSubject("DKTE TPO Department");
	},[arr]);

	function handleMail(event){
		
		
	
		console.log("hii");
		const sendEmail = async () => {
			console.log("hii");

			let dataSend = {
				emails: semail,
				subject: subject,
			};
			console.log(dataSend.subject);
			// const res = await fetch(`${baseUrl}/sendEmail`, {
			// 	method: "POST",
			// 	body: JSON.stringify(dataSend),
			// 	headers: {
			// 	  Accept: "application/json",
			// 	  "Content-Type": "application/json",
			// 	},
			//   })
			try{
				const response = await axios.post("http://localhost:8080/api/cruds/sendEmail", {dataSend})
				console.log(response)
			}
			catch(err){
				console.log(err)
			}
		
		}

		sendEmail();
	}

	function handleCancel() {
		navigate("/cruds");
	}

	return (
		<div className="container" style={{ maxWidth: "400px" }}>
			<h1>Filter with CGPA</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				
				
				<div className="form-group">
					<label>CGPA</label>
					<input
						name="CGPA"
						type="text"
						value={crud.CGPA}
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

				


                <table class="table table-striped">
 
  <tbody>
  
					{arr &&
						arr.map((crud) => {
							return (
								<tr key={crud._id}>
									<td>
											{crud.studentName}
										
									</td>
									<td>{crud.phone}</td>
									<td>{crud.email}</td>
									<td>{crud.College}</td>
									<td>
									<Link to={`/cruds/details/admin/${crud._id}`} className="btn btn-warning">
											View
										</Link>
									</td>
									{/* <td>
										<Link
											to={`/cruds/${crud._id}/edit`}
											className="btn btn-success"
										>
											Edit
										</Link>
									</td>
									<td>
										<Link
											to={`/cruds/${crud._id}/delete`}
											className="btn btn-danger"
										>
											Delete
										</Link>
									</td> */}
								</tr>
							);
						})}

				</tbody>
  

</table>
			</form>
			
			<div className="btn-group">
					{/* <input type="submit" value="Submit" className="btn btn-primary" /> */}
					<button
						type="button"
						onClick={handleMail}
						className="btn btn-secondary"
					>
						send mail	
					</button>
				</div>
		</div>
	);
}

export default CgpaFilter;


///FaA6CoxjFSyIf83n