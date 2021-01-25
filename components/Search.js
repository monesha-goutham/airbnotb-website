import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { PeopleOutlined } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Search = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const history = useHistory();

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};
	return (
		<div className="search">
			<DateRange ranges={[selectionRange]} onChange={handleSelect} />
			<h2>
				Number of People
				<PeopleOutlined />
			</h2>
			<input type="number" defaultValue={2} min={1} />
			<Button
				variant="outlined"
				onClick={() => {
					history.push("/search");
				}}
			>
				Search Rentals
			</Button>
		</div>
	);
};

export default Search;
