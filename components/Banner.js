import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { Link, useHistory } from "react-router-dom";

const Banner = () => {
	const [showSearch, setShowSearch] = useState(false);
	const history = useHistory();

	return (
		<div className="banner">
			<div className="banner__search">
				<Button
					className="banner__search-button"
					variant="outlined"
					onClick={() => {
						setShowSearch(!showSearch);
					}}
				>
					{showSearch ? "Hide" : "Search Dates"}
				</Button>
				{showSearch && <Search />}
			</div>
			<div className="banner__info">
				<h1>Vacation Rentals in India.</h1>
				<h5>
					Find your unique rental to spend your vacation only on Airbnotb.
				</h5>

				<Button
					variant="outlined"
					onClick={() => {
						history.push("/search");
					}}
				>
					Explore Nearby
				</Button>
			</div>
		</div>
	);
};

export default Banner;
