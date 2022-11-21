import Card from './Card'
import './css/MovieCard.css'

const MovieCard = (props) => {
    const imgUrl = props.item.photo;
return(
    <div className="movie-card">
        <div className="movie-card__img">
            <img className="movie-img" src={require('../img/zielona-mila.jpg')} alt={props.item.title} />
        </div>
        <div className="movie-card__text">
            <h2>{props.item.title}</h2>
            <p>{props.item.releaseDate}, {props.item.director}</p>
            <h4npm>{props.item.duration},{props.item.filmGenere}</h4npm>
            <p><span><i className="fa-regular fa-star rate-symbol"></i></span> {props.item.rates}</p>
        </div>

    </div>
);
}

export default MovieCard;
