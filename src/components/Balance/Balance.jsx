import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "./Balance.scss";
import balance from "../../assets/images/balance.png";
import assets from "../../assets/images/assets.png";
import Popover from "../Poppver/Popover";
import card4 from '../../assets/images/card4.png'
import { useNavigate } from "react-router-dom";
import DialoguePopper from "../DialoguePopper/DialoguePopper";

const Balance = ({number, setNumber , closeHandler}) => {
	const navigate = useNavigate();
	const nav = () => {
		navigate("/demo/dashboard/upload");
	};


const Balance = () => {
	return (
		<div className="balance">
			<Sidebar />
			<div className="right-container">
				<DashboardHeader />
				<div className="balance__container">
				{number === 4 && (
				<Popover
					number={number}
					// open1={open1}
                    setNumber={setNumber}
					// setOpen={set1Open}
					closeHandler={closeHandler}
					className={"step4"}
					step={"Step 4 of 15"}
                    img={card4}
					nav={nav}
					header={"Assess the health of your Business"}
					description={
						"Use income statement as a tool to help inform some of the financial decisions you make"
					}
				/>
			)}
					<img src={balance} alt="" />
					<img src={assets} alt="" />
				</div>
				<DialoguePopper />
			</div>
		</div>
	);
};

export default Balance;
