import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "./Balance.scss";
import balance from "../../assets/images/balance.png";
import assets from "../../assets/images/assets.png";

const Balance = () => {
	return (
		<div className="balance">
			<Sidebar />
			<div className="right-container">
				<DashboardHeader />
				<div className="balance__container">
					<img src={balance} alt="" />
					<img src={assets} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Balance;
