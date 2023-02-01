import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import './css/LoginPage.css';
import Footer from '../components/Footer';
import axios from 'axios';


const LoginPage = () => {
	const [form, setForm] = useState({
		login: '',
		password: '',
	})

	const onUpdateField = e => {
		const nextFormState = {
			...form,
				[e.target.name]: e.target.value,
		}
		setForm(nextFormState);
	}

	const validate = () => {
		const errors = {}

		if(form.login.trim() === '') {
			errors.login = 'Login is required'
		}
		if(form.password.trim() === '') {
			errors.password = 'Password is required'
		}
		return Object.keys(errors).length === 0 ? null : errors
	}

	const onSubmitLogin = e => {
		e.preventDefault()
		const errors = validate();

		axios({
			method: 'post',
			url: 'https://at.usermd.net/api/user/auth',
			data: {
				...form
			}
		}).then((response) => {
			localStorage.setItem('token',response.data.token);
			localStorage.setItem('loginId',response.data.userId);
			localStorage.setItem('login', form.login);
			localStorage.setItem('isLogged','true');
			window.location.href='/';
		}).catch((error) => {
			console.log(error.response);
		});
	}
	return (
		<>
			<div className='login'>
				<NavigationBar />
				<h2 className='login-heading'>Logowanie</h2>

				<form className='login__form' onSubmit={onSubmitLogin}>
					<div className='login__form-top'>
						<label for='login' class='login__form-label'>
							Login:
						</label>
						<input
							type='login'
							className='login__form-input'
							id='login'
							name='login'
							placeholder='mail@example.com'
							onChange={onUpdateField}>
						</input>
						<label for='password' className='login__form-label'>
							Hasło:
						</label>
						<input
							type='password'
							className='login__form-input'
							id='password'
							name='password'
							placeholder='***********'
							onChange={onUpdateField}>

						</input>
						<div className='login__form-btns'>
							<Link to='/signup'>
								<button className='login__form-btn login__form-btn--register'>
									Zajerestruj się
								</button>
							</Link>
							<button type='submit' className='login__form-btn'>
								Zaloguj
							</button>
						</div>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};
export default LoginPage;
