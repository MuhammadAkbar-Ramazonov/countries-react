import "./app.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { Info } from "./pages/Info";
import { Routes, Route } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Lang } from "./components/Lang/Lang";
function App() {
	i18n.use(initReactI18next).init({
		fallbackLng: localStorage.getItem("lang"),
		interpolation: {
			escapeValue: false,
		},
		resources: {
			en: {
				translation: Lang.en,
			},
			ru: {
				translation: Lang.ru,
			},
			uz: {
				translation: Lang.uz,
			},
		},
	});

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
