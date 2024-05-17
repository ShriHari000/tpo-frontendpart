import React from 'react';
import "./style.css";
import wipro from '../pages/img/wipro.jpg'
import microsoft from '../pages/img/microsoft.jpg'
import tcs from '../pages/img/tcs.jpg'
import persistent from '../pages/img/persistent.jpg'

import pro1 from '../pages/img/pro1.webp'
import pro2 from '../pages/img/pro2.webp'
import pro3 from '../pages/img/pro3.webp'
import pro4 from '../pages/img/pro4.webp'

function Home() {
	return (
		<div>

			{/* Hero section starts from here */}
			<section id="home">
				<h2>Secure Your Placements Right NOW!!!</h2>
				<p>welcome to DKTE`s Training and Placement Cell </p>
				<div className="btn">
					{/* <a href="#" className="blue">Learn More</a>
          <a href="#" className="yellow">Visit Courses</a> */}
				</div>
			</section>
			{/* Hero section ends from here */}

			{/* Features section starts from here */}
			<section id="features">
				<h1>DKTE’S Textile & Engineering Institute, Ichalkaranji
					(An Autonomous Engineering Colleges in Maharashtra)
					Affiliated to Shivaji University, Kolhapur</h1>
				{/* <p>Replenish man have thing gathering lights yielding shall you</p> */}

				<div className="fea-base">
					<div className="fea-box">
						<h1>Training and Placement Department</h1>

						<p>Training and Placement Department of Engineering is actively involved in keeping liaison with industries, for arrangements of industrial training, and campus interviews. The department provides information to clarify career goals, identifying pathways by conducting orientation lectures and counseling programmes.


							For overall grooming of the students, soft skills is conducted by external agencies approximately for 350 hours. Programme consists of Vocabulary Building, Listening Skills, Speaking Skills, Writing Skills, Resume Writing, Interview Techniques, Quantitative and Logical Aptitude, Mock P.I., Mock, Group Discussion, On-Line Test practices, etc.</p>
					</div>




				</div>
			</section>
			{/* Features section ends from here */}

			{/* Courses section starts from here */}
			<section id="course">
				<h1>Our Major Recruiters</h1>
				{/* <p>Replenish man have thing gathering lights yielding shall you</p> */}
				<div className="row g-3">
					<div className="col-md-3">
						<div className="">
							<div className="">
								<img src={tcs} alt="tcs" className="image img-fluid" />
							</div>
						</div>
					</div>

					<div className="col-md-3">
						<div className="">
							<div className="">
								<img src={wipro} alt="wipro" className="image img-fluid" />
							</div>
						</div>
					</div>

					<div className="col-md-3">
						<div className="">
							<div className="">
								<img src={microsoft} alt="microsoft" className="image img-fluid" />
							</div>
						</div>
					</div>

					<div className="col-md-3">
						<div className="">
							<div className="">
								<img src={persistent} alt="persistent" className="image img-fluid" />
							</div>
						</div>
					</div>
				</div>


			</section>
			{/* Courses section ends from here */}

			{/* Registration section starts from here */}
			<section id="registration">
				<div className="reminder">
					{/* <p>Get 100 Online Courses for Free</p> */}
					<h1>some major Placements</h1>

					<div className="time">
						<div className="date">50+ <br /> Wipro</div>
						<div className="date">100+ <br /> TCS</div>
						<div className="date">50+ <br /> Cognijant</div>
						<div className="date">58+ <br /> Microsoft</div>
					</div>
				</div>


			</section>
			{/* Registration section ends from here */}

			{/* Experts section starts from here */}
			<section id="experts">
				<h1>Faculty</h1>

				<div className="expert-box">
					<div className="profile">
						{/* <img src={pro1} alt="pro1" /> */}
						<h6></h6>
						<p>Training and Placement officer</p>

					</div>

					<div className="profile">
						{/* <img src={pro2} alt="pro2" /> */}
						<h6>co-ordinator</h6>
						<p></p>


					</div>

					<div className="profile">
						{/* <img src={pro3} alt="pro3" /> */}
						<h6>HOD</h6>
						<p></p>

					</div>

					<div className="profile">
						{/* <img src={pro4} alt="pro4" /> */}
						<h6></h6>
						<p>Project guide</p>

					</div>


					{/* Repeat the above structure for other experts */}
				</div>
			</section>
			{/* Experts section ends from here */}

			{/* Footer section starts from here */}
			<footer>

			</footer>
			{/* Footer section ends from here */}
		</div>
	);
}

export default Home;