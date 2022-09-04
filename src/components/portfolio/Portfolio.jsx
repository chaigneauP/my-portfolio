import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Mon portfolio web",
		github: "https://github.com/chaigneauP/my-portfolio",
		demo: "",
	}
];
const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>Mes projets récents</h5>
			<h2>Porfolio</h2>

			<div className="container portfolio__container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt={title} />
							</div>
							<h3>Mon portfolio</h3>
							<div className="portfolio__item-cta">
								<a href={github} className="btn">Github</a>
								{/* <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a> */}
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;