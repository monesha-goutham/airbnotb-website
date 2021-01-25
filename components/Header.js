import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ExpandMore, LanguageOutlined } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<div className="header__container">
			<div className="header">
				<Link to="/">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw4vLCtSxvAtFo2TeYoo4aVtBmbXHeAk_7Q&usqp=CAU"
						alt="airbnb-logo"
						className="header__logo"
					/>
				</Link>

				<div className="header__middle">
					<input type="text" name="" id="" />
					<SearchIcon className="header__middle-icon" />
				</div>
				<div className="header__right">
					<p className="right-item">Become a host</p>
					<LanguageOutlined className="right-item header__icons" />
					<ExpandMore className="right-item header__icons" />
					<Avatar className=" header__avatar right-item " />
				</div>
			</div>
		</div>
	);
};

export default Header;
