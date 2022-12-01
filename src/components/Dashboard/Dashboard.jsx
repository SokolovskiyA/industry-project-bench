import React from "react";
import "./Dashboard.scss";
import AccountingWidgets from "../AccountingWidgets/AccountingWidgets";
import card1 from "../../assets/images/card1-photo.png";
//components
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";
import Popover from "../Poppver/Popover";

import { useState } from "react";

function Dashboard({ number, setNumber,closeHandler, open1, set1Open }) {
	// const [open1, set1Open] = useState(true);

	return (
		<div className="dashboard">
			<Sidebar />
			{number === 1 && (
				<Popover
					number={number}
					open1={open1}
					setNumber={setNumber}
					setOpen={set1Open}
					closeHandler={closeHandler}
					className={"step1"}
					step={"Step 1 of 15"}
					img={card1}
					header={"Your finances at a glance"}
					description={
						"Let's begin with the accounting section. Come here to get high level snapshot of your finances"
					}
				/>
			)}
			<div className="dashboard__body">
				<DashboardHeader />
				<AccountingWidgets setNumber={setNumber} number={number} />
			</div>
		</div>
	);
}

export default Dashboard;
