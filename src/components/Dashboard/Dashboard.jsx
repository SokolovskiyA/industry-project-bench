import React from "react";
import "./Dashboard.scss";
import AccountingWidgets from "../AccountingWidgets/AccountingWidgets";

//components
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";

function Dashboard() {
	return (
		<div className="dashboard">
				<Sidebar />
			<div className="dashboard__body">
				<DashboardHeader />
                <AccountingWidgets />

			</div>
		</div>
	);
}

export default Dashboard;
