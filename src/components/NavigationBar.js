// Bootstrap Imports
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
// My Own Imports
import './css/NavigationBar.css';
import SearchBar from './SearchBar'
import logo from './video.svg';
import { COLORS } from '../values/colors';




const NavigationBar = () => {
	const brand = (
		<span className='text text-first'>
			Film<span className='text text-second'>Web</span>
		</span>
	);

	return (
		<Container style={{ color: COLORS.whiteColor }}>
			<Navbar expand='md' fixed='top' style={{ backgroundColor: COLORS.dark }}>
				<Container className='d-flex justify-content-between'>
					<Navbar.Brand href='/'>
						<img src={logo} alt='filweb logo' width='60' height='30' />
						{brand}
					</Navbar.Brand>
					{/*<SearchBar/>
					TODO SearchBar
					*/}
					<div className='d-flex box SearchBar'>
						<Form>
							<Row>
								<Col xs="auto">
									<Form.Control
										type='search'
										placeholder='Search'
										// value={""}
										aria-label='Search'
									/>
								</Col>
							</Row>
						</Form>
						<Button className='btn-nav btn-nav--search'>Szukaj</Button>
					</div>

					<Button className='btn-nav'>Zaloguj się</Button>
				</Container>
			</Navbar>
		</Container>
	);
};

export default NavigationBar;
