import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./info.css";
import { Back } from "../../assets/images/icons";

export const Info = () => {
	const [data, setPosts] = useState([]);
	const { name } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`https://restcountries.com/v3.1/name/${name}`)
			.then((response) => response.json())
			.then((json) => setPosts(json));
	}, [name]);

	return (
		<div className='about'>
			<div className='container'>
				<div
					className='back-btn-wrapper d-inline-flex align-items-center '
					onClick={() => navigate(-1)}
				>
					<Back />
					<button className='back-btn main-text-color'>Back</button>
				</div>

				{data.map((element) => (
					<div className='d-flex align-items-center justify-content-between'>
						<img
							className='rounded me-5'
							src={element.flags.svg}
							width='560'
							height='401'
							alt=''
						/>
						<div>
							<div className='about-inner d-flex align-items-center'>
								<div>
									<h2 className='about-title main-text-color'>
										{element.name.common}
									</h2>
									<ul className='list-unstyled'>
										<li className='about-item main-text-color'>
											<strong className='about-item-title '>
												Native Name:{" "}
											</strong>
											{Object.values(element.name.nativeName)[0].common}
										</li>
										<li className='about-item main-text-color'>
											<strong className='about-item-title '>
												Population:{" "}
											</strong>
											{element.population}
										</li>
										<li className='about-item main-text-color'>
											<strong className='about-item-title '>Region: </strong>
											{element.region}
										</li>
										<li className='about-item main-text-color'>
											<strong className='about-item-title'>Sub Region: </strong>
											{element.subregion}
										</li>
										<li className='about-item main-text-color'>
											<strong className='about-item-title'>Capital: </strong>
											{element.capital}
										</li>
									</ul>
								</div>
								<ul className='list-unstyled about-list-right'>
									<li className='about-item main-text-color'>
										<strong className='about-item-title '>
											Top Level Domain:{" "}
										</strong>
										{element.tld}
									</li>
									<li className='about-item main-text-color'>
										<strong className='about-item-title'>Currencies: </strong>
										{Object.keys(element.currencies)[0]}
									</li>
									<li className='about-item main-text-color'>
										<strong className='about-item-title'>Languages: </strong>
										{Object.values(element.languages)[0]}
										<span> </span>
										{Object.values(element.languages)[1]}
										<span> </span>
										{Object.values(element.languages)[2]}
									</li>
								</ul>
							</div>
							<div className='d-flex align-items-center '>
								<p className='m-0 me-3 about-item-title about-item-title__active main-text-color'>
									Border Countries:{" "}
								</p>
								<div className='d-flex main-text-color'>
									{Object.values(element.languages).length === 1 ? (
										<div className='me-3 border-countries'>
											{Object.values(element.languages)[0]}
										</div>
									) : Object.values(element.languages).length === 2 ? (
										<div className='d-flex'>
											<div className='me-3 border-countries'>
												{Object.values(element.languages)[0]}
											</div>
											<div className='me-3 border-countries'>
												{Object.values(element.languages)[1]}
											</div>
										</div>
									) : Object.values(element.languages).length === 3 ? (
										<div className='d-flex'>
											<div className='me-3 border-countries'>
												{Object.values(element.languages)[0]}
											</div>

											<div className='me-3 border-countries'>
												{Object.values(element.languages)[1]}
											</div>
											<div className='me-3 border-countries'>
												{Object.values(element.languages)[2]}
											</div>
										</div>
									) : (
										<p className='visually-hidden'>Not any Border Countries</p>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
