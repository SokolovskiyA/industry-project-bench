import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";

//pages

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			
			<Routes>
			<Route element={<DashboardHeader />}/>

			</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
