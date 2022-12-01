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
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<MainHeader />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/demo/dashboard" element={<Dashboard />} />
					<Route path="/demo/dashboard/income" element={<IncomeStatement />} />
					<Route path="/demo/dashboard/balance" element={<Balance />} />
					<Route path="/demo/dashboard/upload" element={<Upload />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
