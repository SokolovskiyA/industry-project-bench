import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Popover from "./components/Poppver/Popover";
import Balance from "./components/Balance/Balance";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import MainHeader from "./components/MainHeader/MainHeader";
import IncomeStatement from "./components/IncomeStatement/IncomeStatement";
import Upload from "./components/Upload/Upload";
import { useState } from "react";
function App() {
	const [number, setNumber] = useState(1);
	const [open1, set1Open] = useState(true);

	const closeHandler = () => {
		set1Open(false);
	};

	return (
		<div className="App">
			<BrowserRouter>
				<MainHeader />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/demo/dashboard"
						element={
							<Dashboard
								number={number}
								setNumber={setNumber}
								closeHandler={closeHandler}
								open1={open1}
								set1open={set1Open}
							/>
						}
					/>
					<Route
						path="/demo/dashboard/income"
						element={<IncomeStatement number={number} setNumber={setNumber} />}
					/>
					<Route
						path="/demo/dashboard/balance"
						element={<Balance number={number} setNumber={setNumber} />}
					/>
					<Route
						path="/demo/dashboard/upload"
						element={<Upload number={number} setNumber={setNumber} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
