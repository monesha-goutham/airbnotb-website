import { FavoriteBorderOutlined, Star } from "@material-ui/icons";
import React from "react";
import "./SearchResult.css";

const SearchResult = ({
	img,
	location,
	title,
	price,
	star,
	description,
	total,
}) => {
	return (
		<div className="search-res">
			<img src={img} alt="" />
			<FavoriteBorderOutlined className="search-res__heart" />
			<div className="search-res__info">
				<div className="search-res__info-top">
					<p>{location}</p>
					<h3>{title}</h3>
					<p>_____</p>
					<p>{description}</p>
				</div>
				<div className="search-res__info-bottom">
					<div className="search-res__star">
						<Star className="search-res__star-icon" />
						<p>
							<strong>{star}</strong>
						</p>
					</div>
					<div className="search-res__price">
						<h2>{price}</h2>
						<p>{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchResult;
