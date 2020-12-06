import React, { FC } from "react";

import { useBreakpoint } from "../utilities";

interface PropsComponent {
	img: string;
	title: string;
	description: string;
	date: string;
	url: string;
}

const Card: FC<PropsComponent> = ({ img, title, description, date, url }) => {
	const breakpoints = useBreakpoint();

	const redirectHandler = (newurl: string) => () =>
		window.open(newurl, "_blank");

	return (
		<div className="card mx-auto w-100" style={{ maxWidth: "30rem" }}>
			<div className="card__container" onClick={redirectHandler(url)}>
				<img src={img} className="card-img-top image-link" alt="News" />
			</div>
			<div className="card-body">
				<h5 className="card-title p--subtitle font-weight-bold">
					{title}
				</h5>
				{breakpoints.md && (
					<p className="card-text p--text">{description}</p>
				)}
				<button
					className="btn btn-link p--text px-0"
					onClick={redirectHandler(url)}
				>
					Read more
				</button>
			</div>
			<div className="card-footer">
				<small className="text-muted p--small">{date}</small>
			</div>
		</div>
	);
};

export default Card;
