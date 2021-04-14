import React from "react";

function About() {
	return (
		<section className="my-5">
			<div className="my-2">
				<div className="profile-img my-5">
					{/* <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i> */}
					<img
						src={require("../../assets/profile/profile-img.jpg")}
						width="200px"
						height="200px"
						style={{ borderRadius: "50%" }}
					></img>
				</div>
				<p>
					My name is Tochukwu Sylvester Nwizu. I attended the Vanderbilt
					University coding Boot Camp. As a full stack web developer,
					I am looking to work in an environment that will allow me to contribute
					as well as allow me to grow and develope as a full stack
					web developer. I have a very strong work ethic, and I know the
					importance of continuously striving for improvement. For this reason,
					I am open and willing to trying new things outside of my comfort zone.
					I intend on using my new learned skill set in solving real world problems
					through collaboration with my coleques. I believe with teamwork; no
					problem will be too difficult to tackle.
					Moreover, My experience working in healthcare setting has helped me to
				    cultivate the habit of working calmly even in a highly stressful environment
					
				</p>
			</div>
		</section>
	);
}

export default About;
