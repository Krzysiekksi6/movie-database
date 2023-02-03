import { useState, useEffect, React } from 'react';
import axios from 'axios';
import { useNavigate, useLocation} from 'react-router-dom';
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";


const Details = () => {
    /*const navigate = useNavigate();*/
    const location = useLocation();
    const id = location.state.id;
    const URL = `https://at.usermd.net/api/movies/${id}`;
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(URL).then((response) => {
            const movie = response.data;
                setMovie(movie);
        });
    }, []);

    return (
        <>
            <NavigationBar/>
        <div className='content'>
            <div className='movie-card' style={{color: '#eeee'}}>
                <div className="movie-card__img">
                    <img className="movie-img" src={movie.image} alt={movie.title} />
                </div>
                <div className='movie-card__text'>

                    <h2>{movie.title}</h2>
                    <p>{movie.content}</p>

                </div>
            </div>
        </div>
            <Footer/>
        </>

    );
};

export default Details;
