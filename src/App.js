import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startup from "./views/Startup";
import Translation from "./views/Translation";
import Profile from "./views/Profile";
import Navbar from "./components/Navbar/Navbar";

function App() {
	// API key from .env
	console.log(process.env.REACT_APP_API_KEY);

	// API URL from .env
	console.log(process.env.REACT_APP_API_URL);

	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
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
