import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
	// Replace links with deployed projects and GitHub repos
	const [projects] = useState([
		{
			name: "password-generator",
			description: "Javascript/CSS app that generates random password",
			link: "https://toksly.github.io/Password-Generator/",
			repo: "https://github.com/toksly/Password-Generator/",
		},
		{
			name: "budget-tracker",
			description: "Javascript/service walker/node.js app for tracking spending",
			link: "https://toksly-budget-tracker.herokuapp.com/",
			repo: "https://github.com/toksly/Budget-Tracker",
		},
		{
			name: "movie-hub",
			description: "Javascript/CSS/JQuery",
			link: "https://clintonstrange.github.io/movie-hub/",
			repo: "https://github.com/clintonstrange/movie-hub",
		},
		{
			name: "tech-blog",
			description: "Javascripthandlebars/sequelize/anode.js",
			link: "https://toksly-tech-blog.herokuapp.com/",
			repo: "https://github.com/toksly/tech-blog",
		},
		{
			name: "spl-goalden",
			description:
				"App speech pathologists uses to track students goals and progress ",
			link: "https://mighty-falls-97052.herokuapp.com/",
			repo: "https://github.com/Craig5117/slp-goalden",
		},
		{
			name: "work-day-scheduler",
			description: "Javascript/CSS",
			link: "https://toksly.github.io/Work-day-Scheduler/",
			repo: "https://github.com/toksly/Work-day-Scheduler",
		},
		{
			name: "code-quiz",
			description: "Javascript/CSS app for generating timed quiz",
			link: "https://toksly.github.io/Code-quiz/",
			repo: "https://github.com/toksly/Code-quiz",
		},
		{
			name: "book-search-engine",
			description: "MERN Stack app for searching books",
			link: "https://toksly-book-search-engine.herokuapp.com/",
			repo: "https://github.com/toksly/book-search-engine",
		},
		{
			name: "weather-dashboard",
			description: "JavaScript/CSS/API app for making weather forcast",
			link: "https://toksly.github.io/Weather-Dashboard//github.com",
			repo: "https://github.com/toksly/Weather-Dashboard",
		},
		{
			name: "artist-store",
			description: "MERN Art search engine",
			link: "https://young-lake-28602.herokuapp.com/",
			repo: "https://github.com/vloriandervishi/artist-store",
		},
	]);

	return (
		<div>
			<div className="flex-row">
				{projects.map((project, idx) => (
					<Project project={project} key={"project" + idx} />
				))}
			</div>
		</div>
	);
}

export default Portfolio;
