import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";

import Popover from "./components/Poppver/Popover";

//pages

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			
			<Routes>
			<Route to="/" element={<DashboardHeader />}/>

			</Routes>
			</BrowserRouter>
      
		</div>
	);
}

export default App;
