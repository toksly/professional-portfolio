import React from "react";
import coverImage from "../../assets/cover/image-cover.jpg";

function Header(props) {
	return (
		<div className="d-flex flex-column flex-md-row px-md-4 bg-white border-bottom shadow-sm custom-height">
			<h1 className="my-0 mr-md-auto font-weight-normal text-dark text-center gree-box">
				Sylvester Nwizu
			</h1>
			{props.children}
		</div>
	);
}

export default Header;
