import "./app.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { useEffect, useState } from "react";

function App() {
	let [country, setCountry] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isEror, setisEror] = useState(false);

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => {
				setCountry(data);
				setLoading(false);
				console.log(loading);
			})
			.catch((err) => {
				console.log(err);
				setisEror(true);
				setLoading(false);
			});
	}, []);

	function handelInput(evt) {
		if (evt.key === "Enter") {
			console.log(evt.target.value);
			fetch(`https://restcountries.com/v3.1/name/${evt.target.value}`)
				.then((res) => res.json())
				.then((data) => {
					setCountry(data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	return (
		<>
			<Header />
			<main className='site-main'>
				<section className='hero-section'>
					<div className='container'>
						<form
							onSubmit={(evt) => {
								evt.preventDefault();
							}}
							className='row justify-content-between flex-wrap  site-search p-0 mb-3 '
							action='https://echo.htmlacademy.ru/'
							method='post'
							autoComplete='off'
						>
							<input
								onKeyDown={handelInput}
								className='col-12 col-sm-12 col-md-9  col-xl-10 site-search-input form-control'
								type='search'
								name='user_search'
								placeholder='Search for a country…'
								aria-label='search'
							/>

							<select
								onChange={(evt) => {
									fetch(
										`https://restcountries.com/v3.1/region/${evt.target.value}`,
									)
										.then((res) => res.json())
										.then((data) => {
											setCountry(data);
											console.log(setCountry);
											// console.log(data);
										})
										.catch((err) => {
											console.log(err);
										});
								}}
								className='col-12 col-sm-12 col-md-3 col-xl-2 form-selects'
							>
								<option hidden>Filter by Region</option>
								<option defaultValue={"Africa"}>Africa</option>
								<option defaultValue={"America"}>America</option>
								<option defaultValue={"Asia"}>Asia</option>
								<option defaultValue={"Europe"}>Europe</option>
								<option defaultValue={"Oceania"}>Oceania</option>
							</select>
						</form>
						{loading && <h2>Loading...</h2>}
						{isEror && <h2>Error...</h2>}
						{country.length !== 0 && (
							<ul className='hero-section-list row justify-content-center gx-5'>
								{country.map((element) => (
									<Hero
										key={element.name.official}
										name={element.name.common}
										population={element.population}
										region={element.region}
										capital={element.capital}
										img={element.flags.svg}
									/>
								))}
							</ul>
						)}
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
