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


	return (

		<div className='movie-card'>
			<div className="movie-card__img">
            <img className="movie-img" src={props.image} alt={props.title} />
        </div>
			<div className='movie-card__text'>

				<h2>{props.title}</h2>
				<p>{props.content.length <= 100 ? props.content : props.content.slice(0,70) + '...'}</p>

				{
					!isNotLogged && <Link to={URL} state={myData}>Kliknij po szczegóły...</Link>
				}


			</div>
		</div>

	);
};

export default MovieCard;
