import React from "react";
import incomeHead from "../../assets/income_statement_head.png";
import incomeBody from "../../assets/income_body.png";
import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Popover from "../Poppver/Popover";
import card3 from '../../assets/images/card3.png'
import "./IncomeStatement.scss";
import { useNavigate } from "react-router-dom";

function IncomeStatement({number, setNumber , closeHandler}) {
const navigate=useNavigate();
	const nav = () => {
		navigate("/demo/dashboard/balance");
	};
	return (
		<div className="myincome">
			<Sidebar />
			<div className="side-container">
				<DashboardHeader />
				<div className="income-statement">
				{number === 3 && (
				<Popover
					number={number}
					// open1={open1}
                    setNumber={setNumber}
					// setOpen={set1Open}
					closeHandler={closeHandler}
					className={"step3"}
					step={"Step 3 of 15"}
                    img={card3}
					header={"Your finances at a glance"}
					nav={nav}
					description={
						"Let's begin with the accounting section. Come here to get high level snapshot of your finances"
					}
				/>
			)}
					<div className="income-statement__container">
						<img
							className="income-statement__image"
							src={incomeHead}
							alt="income head"
						/>
						<img
							className="income-statement__image2"
							src={incomeBody}
							alt="income head"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IncomeStatement;
