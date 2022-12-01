import "./App.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";

//pages

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			
			<Routes>

			</Routes>
			<Route element={<Header/>}/>
			</BrowserRouter>
		</div>
	);
}

export default App;
