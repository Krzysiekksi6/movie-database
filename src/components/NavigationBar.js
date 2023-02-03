import Nav from 'react-bootstrap/Nav';
import { isExpired, decodeToken  } from "react-jwt";

import { useState, useEffect, React } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

// Bootstrap Imports
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
// My Own Imports
import './css/NavigationBar.css';
import logo from './video.svg';
import { COLORS } from '../values/colors';

const NavigationBar = () => {
	const navigate = useNavigate();
	const isNotLogged = isExpired(localStorage.getItem('token'));
	const [movies, setMovies] = useState([]);
	const [searchItem, setSearchItem] = useState("");
	const URL = 'https://at.usermd.net/api/movies';

	const onUpdateField = e => {
		e.preventDefault();
		setSearchItem(e.target.value)
	}

	const getMovie = e => {
		e.preventDefault();
		const result = movies.find(movie => movie.title === searchItem)
		console.log(result)
		if(result !== undefined) {
			navigate("/details", {state: result})
		}
	}

	useEffect(() => {
		axios.get(URL).then((response) => {
			const movie = response.data;
			setMovies(movie);
		});
	}, []);

	const brand = (
		<span className='text text-first'>
			Film<span className='text text-second'>Web</span>
		</span>
	);

	return (
		<div className='navigation-bar'>
			<Navbar
				expand='lg'
				fixed='top'
				style={{ backgroundColor: COLORS.dark, color: COLORS.whiteColor }}>
				<Container style={{ color: COLORS.whiteColor }}>

					<Navbar.Brand href='/'>
						<img
							className='navigation-bar__logo'
							src={logo}
							alt='filweb logo'
							width='60'
							height='30'
						/>
						{brand}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='35'
							height='35'
							fill='currentColor'
							className='bi bi-list nav-icon'
							viewBox='0 0 16 16'>
							<path
								fillRule='evenodd'
								d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
							/>
						</svg>
					</Navbar.Toggle>
					<Navbar.Collapse id='navbarScroll'
					className='d-lg-flex justify-content-lg-around'
					>
						<Nav
							className='d-flex justify-content-around me-lg-auto my-lg-0'
							style={{ maxHeight: '100px' }}
							navbarScroll>
						</Nav>
						<Form className='d-flex justify-content-around my-3 my-lg-2' onSubmit={getMovie}>
							<Form.Control
								type='text'
								placeholder='Search'
								className='me-auto'
								aria-label='Search'
								onChange={onUpdateField}
							/>
								<Button className='btn-nav btn-nav--search' type="submit">Szukaj</Button>

							{
								isNotLogged && <Link to='/signin' style={{ textDecoration: 'none' }}>
									<Button className='btn-nav'>Zaloguj</Button>
								</Link>
							}
							{
								!isNotLogged &&
								<>
								<Link to='/add' style={{ textDecoration: 'none' }}>
									<Button className='btn-nav'

									>Dodaj Film</Button>
								</Link>
								<Link to='/signin' style={{ textDecoration: 'none' }}>
									<Button className='btn-nav'
											onClick={() => {
												localStorage.setItem('isLogged','false');
												localStorage.removeItem('token')
												localStorage.removeItem('login')
											}

									}
									>Wyloguj</Button>
								</Link>
								</>

							}

						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavigationBar;
