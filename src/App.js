import "./app.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

import { Info } from "./pages/Info";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<main className='site-main'>
				<Routes>
					<Route path='/' element={<Hero />} />
					<Route path='/:name' element={<Info />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
