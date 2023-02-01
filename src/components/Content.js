import { useState, useEffect, React } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';
import './css/Content.css';
const Content = () => {
	const URL = 'https://at.usermd.net/api/movies';
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(URL).then((response) => {
			const movie = response.data;
			setMovies(movie);
		});
	}, []);

	return (
		<div className='content'>
			{movies.map((movie, index) => {

				if(movie.title && movie.title.trim()!=="" && movie.content && movie.image) {
					return <MovieCard id={movie.id} title={movie.title} content={movie.content} image={movie.image} key={movie.id} />;
				}
			})}
		</div>
	);
};

export default Content;
