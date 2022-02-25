import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startup from "./views/Startup";
import Translation from "./views/Translation";
import Profile from "./views/Profile";

function App() {
	// API key from .env
	console.log(process.env.REACT_APP_API_KEY);

	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Startup />} />
					<Route path="/translation" element={<Translation />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
