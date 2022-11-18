import { Link } from 'react-router-dom';
import App from '../App';
import './ErrorPage.css';
const ErrorPage = () => {
	return (
			<header className='header'>
				<div className='header__text'>
					<h1 className='header__heading'>404</h1>
					<h2 className='header__description--first'>opps! page not found</h2>
					<p className='header__description--second'>Sorry, the page you're looking for doesn't exist. If you think something is broken report a problem</p>
                    <a href='App' className="header__btn btn-special-animation">return home</a>
				</div>
				
				<div className='header__hero-img'></div>
				<div className='header__hero-shadow'></div>
			</header>
	);
};

export default ErrorPage;
