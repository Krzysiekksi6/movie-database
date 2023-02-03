import React from 'react';
import { Link } from 'react-router-dom';

import './css/MovieCard.css';
import {decodeToken, isExpired} from "react-jwt";

const MovieCard = (props) => {
	const user = decodeToken(localStorage.getItem('token'));
	const isNotLogged = isExpired(localStorage.getItem('token'));
	const URL = `/details`
	const myData = {
		id: props.id
	}

	const MIN = 0.0;
	const MAX = 5.0;
	const DECIMALS = 2;

	const getRandomFloat = (min, max, decimals) => {
		const number = (Math.random() * (max - min) + min).toFixed(decimals);

		return parseFloat(number);
	}
	return (

		<div className='movie-card'>
			<div className="movie-card__img">
            <img className="movie-img" src={props.image} alt={props.title} />
        </div>
			<div className='movie-card__text'>

				<h2>{props.title}</h2>
				<p>{props.content.length <= 100 ? props.content : props.content.slice(0,70) + '...'}</p>
				<p>
					<span>
						<i className='fa-regular fa-star rate-symbol'> {getRandomFloat(MIN,MAX,DECIMALS)} / 5.00</i>
					</span>

				</p>
				{
					!isNotLogged && <Link to={URL} state={myData}>Kliknij po szczegóły...</Link>
				}


			</div>
		</div>

	);
};

export default MovieCard;
