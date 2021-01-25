import React from "react";
import "./Card.css";

const Card = ({ src, title, description, price }) => {
	return (
		<div className="card">
			<img src={src} alt="nil" />
			<div className="card__info">
				<h3>{title}</h3>
				<p>{description}</p>
				<h4>{price}</h4>
			</div>
		</div>
	);
};

export default Card;
