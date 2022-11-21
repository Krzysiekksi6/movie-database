import MovieCard from './MovieCard'
import './css/Content.css'
const Content = () => {
	const movies = [
		{
			id: 1,
			title: "Zielona Mila",
			filmGenere: "Dramatic",
			duration: "2h 41min",
			releaseDate: 2001,
			director: "Frank Darabont",
			rates: 8.6,
			photo: '../img/zielona-mila.jpg',
		},

		{
			id: 2,
			title: "CZARNA PANTERA",
			filmGenere: "Sci Fi",
			duration: "2h 41min",
			releaseDate: 2022,
			director: "Ryan Coogler",
			rates: 8.6,
			photo: '../img/zielona-mila.jpg'
		},

		{
			id: 3,
			title: "CZARNA PANTERA",
			filmGenere: "Sci Fi",
			duration: "2h 41min",
			releaseDate: 2022,
			director: "Ryan Coogler",
			rates: 8.6,
			photo: '../img/zielona-mila.jpg'
		},

		{
			id: 4,
			title: "Zielona Mila",
			filmGenere: "Dramatic",
			duration: "2h 41min",
			releaseDate: 2001,
			director: "Frank Darabont",
			rates: 8.6,
			photo: '../img/zielona-mila.jpg'
		},
	]
	return(
		<div className="content">

				<MovieCard item={movies[0]}/>
				<MovieCard item={movies[1]}/>
				<MovieCard item={movies[2]}/>


	</div>);
};

export default Content;
