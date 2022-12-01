import "./Header.scss";

const Header = () => {
	return (
		<div className="navbar">
			<div className="navbat__top">
				<h2 className="navbar__company-name">Lettuce Bee Inc.</h2>
				<div className="navbar__buttons">
					<button className="navbar__date">Jan 1, 2022 to June24,2022 </button>
					<button className="navbar__search">search </button>
					<button className="navbar__call">call </button>
					<button className="navbar__surprise">gift </button>
				</div>
			</div>
			<div className="navbar__middle">
				<h1 className="navbar__title">Accounting</h1>
			</div>
			<div className="navbar__bottom">
				<button className="navbar__overview">Overview</button>
				<button className="navbar__income">Income</button>
				<button className="navbar__balance">Balance</button>
				<button className="navbar__documents">Documents</button>
			</div>
		</div>
	);
};

export default Header;
