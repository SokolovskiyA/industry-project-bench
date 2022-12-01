import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";




//pages

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path ="/" element={<Home />}/>
					<Route path="/dashboard" element={<Dashboard />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
