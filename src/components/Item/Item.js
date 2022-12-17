import React from 'react'
import { NavLink } from "react-router-dom";

export const Item = ({ name, population, region, capital, img }) => {
	return (
		<>
			<li className='col-xl-3 col-md-6 col-sm-12 d-flex justify-content-center mb-5 hero-section-item'>
				<NavLink className='hero-section-item-link' to={name}>
					<img
						className='hero-section-item-img'
						width='100%'
						height='160'
						src={img}
						alt={name}
					/>
					<div className='card-body p-3'>
						<h3 className='hero-section-item-wrapper-title mb-3'>{name}</h3>
						<span className='hero-section-item-wrapper-inner d-flex mb-2'>
							<strong className='hero-section-item-wrapper-inner-title'>
								Population:
							</strong>
							<p className='hero-section-item-wrapper-inner-discrip'>
								{population}
							</p>
						</span>
						<span className='hero-section-item-wrapper-inner d-flex mb-2'>
							<strong className='hero-section-item-wrapper-inner-title'>
								Region:
							</strong>
							<p className='hero-section-item-wrapper-inner-discrip'>
								{region}
							</p>
						</span>
						<span className='hero-section-item-wrapper-inner d-flex mb-2'>
							<strong className='hero-section-item-wrapper-inner-title'>
								Capital:
							</strong>
							<p className='hero-section-item-wrapper-inner-discrip'>
								{capital}
							</p>
						</span>
					</div>
				</NavLink>
			</li>
		</>
	);
};
