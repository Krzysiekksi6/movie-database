import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavigationBar.css'
import { COLORS } from '../values/colors';

const NavigationBar = () => {
	return (
        <Container style={{color: COLORS.whiteColor}}>
			<Navbar expand='md' fixed='top' style={{backgroundColor: COLORS.dark}}>
				<Container className="d-flex justify-content-between">
					<Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
                    <Form>
							<Form.Control
								type='search'
								placeholder='Search'
								className='me-2'
								aria-label='Search'
							/>
						</Form>
							<Button variant='outline-success'>Zaloguj się</Button>

				</Container>
			</Navbar>
            </Container>
	);
};

export default NavigationBar;
