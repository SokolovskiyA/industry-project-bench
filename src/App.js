import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Popover from "./components/Poppver/Popover";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import MainHeader from "./components/MainHeader/MainHeader";


//pages

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			<MainHeader />
      		<Popover />
				<Routes>
					<Route path="/" element={<DashboardHeader />} />
					<Route path="/dashboard" element={<Dashboard />}/>

				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
