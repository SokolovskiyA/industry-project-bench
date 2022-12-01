import React from "react";
import incomeHead from "../../assets/income_statement_head.png";
import incomeBody from "../../assets/income_body.png";
import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "./IncomeStatement.scss";
import DialoguePopper from "../DialoguePopper/DialoguePopper";

function IncomeStatement() {
	return (
		<div className="myincome">
			<Sidebar />
			<div className="side-container">
				<DashboardHeader />
				<div className="income-statement">
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
				<DialoguePopper />
			</div>
		</div>
	);
}

export default IncomeStatement;
