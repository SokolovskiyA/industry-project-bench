import "./DashboardHeader.scss";

//icons
import calendarIcon from "../../assets/icons/svg6.svg";
import searchIcon from "../../assets/icons/svg7.svg";
import callIcon from "../../assets/icons/svg8.svg";
import rewardIcon from "../../assets/icons/svg4.svg";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const DashboardHeader = () => {
	const [overview, setOverview] = useState("navbar__nav-item--active");
	const [income, setIncome] = useState("");
	const [balance, setBalance] = useState("");
	const [docs, setDocs] = useState("");

	const liClickHandler = (e) => {
		console.log(e.target.innerText);
		if (e.target.innerText === "Income") {
			setIncome("navbar__nav-item--active");
			setOverview("");
			setBalance("");
			setDocs("");
		} else if (e.target.innerText === "Balance") {
			setIncome("");
			setOverview("");
			setBalance("navbar__nav-item--active");
			setDocs("");
		} else if (e.target.innerText === "Documents") {
			setIncome("");
			setOverview("");
			setBalance("");
			setDocs("navbar__nav-item--active");
		} else {
			setIncome("");
			setOverview("navbar__nav-item--active");
			setBalance("");
			setDocs("");
		}
	};
	return (
		<div className="navbar">
			<div className="navbar__container">
				<div className="navbar__top">
					<h2 className="navbar__company-name">Lettuce Bee Inc.</h2>
					<div className="navbar__buttons">
						<ul className="navbar__list">
							<li className="navbar__date">
								<img
									className="navbar__icons"
									src={calendarIcon}
									alt="icon"
								></img>
								Jan 1, 2022 to June24,2022
							</li>
							<li className="navbar__search">
								<img
									className="navbar__icons"
									src={searchIcon}
									alt="icon"
								></img>
							</li>
							<li className="navbar__call">
								<img className="navbar__icons" src={callIcon} alt="icon"></img>
							</li>
							<li className="navbar__surprise">
								<img
									className="navbar__icons"
									src={rewardIcon}
									alt="icon"
								></img>
							</li>
						</ul>
					</div>
				</div>
				<div className="navbar__middle">
					<h1 className="navbar__title">Accounting</h1>
				</div>
				<div className="navbar__bottom">
					<ul className="navbar__nav-item-list">
						<Link to="/demo/dashboard">
							<li className={`navbar__nav-item ${overview}`}>Overview</li>
						</Link>
						<Link
							onClick={(e) => {
								liClickHandler(e);
							}}
							to="/demo/dashboard/income"
						>
							<li
								onClick={(e) => {
									liClickHandler(e);
								}}
								className={`navbar__nav-item income${income}`}
							>
								Income
							</li>
						</Link>
						<Link to="/demo/dashboard/balance">
							<li
								onClick={(e) => {
									liClickHandler(e);
								}}
								className={`navbar__nav-item ${balance}`}
							>
								Balance
							</li>
						</Link>

						<Link to="/demo/dashboard/upload">
							<li
								onClick={(e) => {
									liClickHandler(e);
								}}
								className={`navbar__nav-item ${docs}`}
							>
								Documents
							</li>
						</Link>
					</ul>
				</div>
				{/* <IncomeStatement /> */}
			</div>
		</div>
	);
};

export default DashboardHeader;
