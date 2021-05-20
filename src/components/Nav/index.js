import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
	const { pages = [], setCurrentPage, currentPage } = props;

	useEffect(() => {
		document.title = capitalizeFirstLetter(currentPage.name);
	}, [currentPage]);

	return (
		<nav className="my-md-0 mr-md-3 navbar-stuff">
			<ul>
				{pages.map((Page) => (
					<li
						className={`p-2 text-dark ${
							currentPage.name === Page.name && "navActive"
						}`}
						key={Page.name}
					>
						<span onClick={() => setCurrentPage(Page)}>
							{capitalizeFirstLetter(Page.name)}
						</span>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Nav;
