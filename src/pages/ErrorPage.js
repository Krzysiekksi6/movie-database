import React from 'react';
import { Link } from 'react-router-dom';
import './css/ErrorPage.css';

const ErrorPage = () => {
	return (
		<div className='header'>
			<div className='header__text'>
				<h1 className='header__heading'>
					4
					<span>
						<i className='fa-regular fa-face-frown movie-logo'></i>
					</span>
					4
				</h1>
				<h2 className='header__description--first'>opps! Nie znaleziono strony</h2>
				<p className='header__description--second'>
				Przepraszamy, strona, której szukasz, nie istnieje. Jeśli uważasz, że
					coś jest uszkodzone zgłoś problem
				</p>
				<Link to="/" className='header__btn btn-special-animation'>Menu Główne</Link>

			</div>

			<div className='header__hero-img'></div>
			<div className='header__hero-shadow'></div>
		</div>
	);
};

export default ErrorPage;
