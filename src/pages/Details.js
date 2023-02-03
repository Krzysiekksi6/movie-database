import { useState, useEffect, React } from 'react';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import NavigationBar from "../components/NavigationBar";
import Button from 'react-bootstrap/Button';
import Footer from "../components/Footer";
import {decodeToken, isExpired} from "react-jwt";


const Details = () => {
    const user = decodeToken(localStorage.getItem('token'));
    const isNotLogged = isExpired(localStorage.getItem('token'));
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;
    const URL = `https://at.usermd.net/api/movies/${id}`;
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(URL).then((response) => {
            const movie = response.data;
                setMovie(movie);
        });
    }, []);

    const deleteMovie = (id) => {
        axios({
            method: 'delete',
            url: `https://at.usermd.net/api/movie/${id}`,
        }).then((response) => {
            console.log(response.data);
            setMovie(response.data)
        }).catch((error) => {
            console.log(error);
        });
        navigate('/')
    }

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
                    {
                        !isNotLogged &&
                        <Button variant="danger" onClick={() => deleteMovie(movie.id)}>Usuń film</Button>
                    }
                </div>

            </div>
        </div>
            <Footer/>
        </>

    );
};

export default Details;
