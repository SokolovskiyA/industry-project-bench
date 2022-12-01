import "./DashboardHeader.scss";

const DashboardHeader = () => {
	return (
		<div className="navbar">
			<div className="navbat__top">
				<h2 className="navbar__company-name">Lettuce Bee Inc.</h2>
				<div className="navbar__buttons">
					<ul className="navbar__list">
						<li className="navbar__date">Jan 1, 2022 to June24,2022 </li>
						<li className="navbar__search">search </li>
						<li className="navbar__call">call </li>
						<li className="navbar__surprise">gift </li>
					</ul>
				</div>
			</div>
			<div className="navbar__middle">
				<h1 className="navbar__title">Accounting</h1>
			</div>
			<div className="navbar__bottom">
				<ul className="navbar__nav-item-list">
					<li className="navbar__nav-item">Overview</li>
					<li className="navbar__nav-item">Income</li>
					<li className="navbar__nav-item">Balance</li>
					<li className="navbar__nav-item">Documents</li>
				</ul>
			</div>
		</div>
	);
};

export default DashboardHeader;
