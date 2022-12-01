import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "./Upload.scss";
import drop from "../../assets/images/drop.png";
import docs from "../../assets/images/docs.png";
import uncat from "../../assets/images/uncat.png";
import { useNavigate } from "react-router-dom";
import Popover from "../Poppver/Popover";
import card5 from "../../assets/images/card5.png";
import DialoguePopper from "../DialoguePopper/DialoguePopper";

import SignUpModal from "../SignUpModal/SignUpModal";
import { useState } from "react";

const Upload = ({ number, setNumber, closeHandler }) => {
	const navigate = useNavigate();
	const nav = () => {
		navigate("/demo/dashboard/upload");
	};

	const [show, setShow] = useState(false);

	


	return (
		<div className="upload">
			<Sidebar />
			<div className="right-container" onClick={()=> setShow(true)}>
				{number === 5 && (
					<Popover
						number={number}
						// open1={open1}
						setNumber={setNumber}
						// setOpen={set1Open}
						closeHandler={closeHandler}
						className={"step5"}
						step={"Step 5 of 15"}
						img={card5}
						header={"Your documents all in one page"}
						description={
							"This is where your securely uploaded documents live ( like tax documents and important exports for your bookkeeping"
						}
						// setShow={setShow}
					/>
				)}
				
				<DashboardHeader />
				<div className="balance__container">
					<img src={drop} alt="" />
					<img src={uncat} alt="" />
					<img src={docs} alt="" />
				</div>
				{
					show && <SignUpModal/>
				}
				<DialoguePopper />
			</div>
		</div>
	);
};

export default Upload;
