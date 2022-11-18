import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavigationBar.css';
import logo from './video.svg';
import { COLORS } from '../values/colors';

const NavigationBar = () => {
    const brand = (<span className='text text-first'>Film<span className='text text-second'>Web</span></span>);
    
	return (
		<Container style={{ color: COLORS.whiteColor }}>
			<Navbar expand='md' fixed='top' style={{ backgroundColor: COLORS.dark }}>
				<Container className='d-flex justify-content-between'>
					<Navbar.Brand href='/'>
						<img
							src={logo}
							alt='filweb logo'
							width='60'
							height='30'
						/>{brand}
						
					</Navbar.Brand>
					<Form>
						<Form.Control
							type='search'
							placeholder='Search'
							className='me-5'
							aria-label='Search'
						/>
					</Form>
					<Button className='login-btn'>Zaloguj się</Button>
				</Container>
			</Navbar>
		</Container>
	);
};

export default NavigationBar;
