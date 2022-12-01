import React from "react";
import "./Dashboard.scss";
import AccountingWidgets from "../AccountingWidgets/AccountingWidgets";

//components
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";
import Popover from "../Poppver/Popover";

import { useState } from "react";

function Dashboard() {
	const [open1, set1Open] = useState(true);
	return (
		<div className="dashboard">
			<Sidebar />
			<Popover
				number={1}
				open1={open1}
				set1Open={set1Open}
				className={"step1"}
				step={"Step 1 of 15"}
				header={"Your finances at a glance"}
				description={
					"Let's begin with the accounting section. Come here to get high level snapshot of your finances"
				}
			/>
			<div className="dashboard__body">
				<DashboardHeader />
				<AccountingWidgets />
			</div>
		</div>
	);
}

export default Dashboard;
