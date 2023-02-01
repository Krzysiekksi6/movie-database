import {React, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const RegisterPage = () => {
    const navigate = useNavigate();
	const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	const [form, setForm] = useState({
        name: "",
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({});

	const  onUpdateField = e => {
		const nextFormState = {
			...form,
			[e.target.name]: e.target.value,
		}
		setForm(nextFormState);
	}

	const validate = () => {
		const errors = {};
		if(form.email.trim() === '') {
			errors.email = 'Email is required'
		}
		if(form.name.trim() === '') {
			errors.name = 'Name is required'
		}
		if(form.password.trim() === '') {
			errors.password = 'Password is required'
		}
		if (!form.email.match(validEmailRegex)) {
			errors.email = 'Invalid email address!'
		}

		return Object.keys(errors).length === 0 ? null : errors
	}

	const createUser = () => {

		axios({
			method: 'post',
			url: 'https://at.usermd.net/api/user/create',
			data: {
				...form
			}
		}).then((response) => {
            console.log(response);
            navigate("/signin")
		}).catch((error) => {
            console.log(error);
		});

	}

	const onSubmitForm = e => {
		e.preventDefault();
		const errors = validate();
		setErrors({errors: errors || {}});
		if(errors) {
			console.log(errors)
			return;
		}
		createUser()
	};

	return (
		<>
		<div className='register'>
				<NavigationBar />
				<form className='login__form' onSubmit={onSubmitForm}>
					<div className='login__form-top'>
						<h2 className='register-heading'>Rejestracja</h2>

						<label for='email' className='login__form-label'>
							E-mail:
						</label>
						<input
							type='email'
							className='login__form-input'
							id='email'
							name="email"
							placeholder='email@example.com'
							onChange={onUpdateField}

						/>

						<label for='name' class='login__form-label'>
							Name:
						</label>
						<input
							type='text'
							className='login__form-input'
							id='name'
							name="name"
							placeholder='Nickname'
							onChange={onUpdateField}

						/>

						<label for='password' className='login__form-label'>
							Hasło:
						</label>
						<input
							type='password'
							name="password"
							className='login__form-input'
							placeholder='*********'
							onChange={onUpdateField}
						>
						</input>
						<div className='login__form-btns'>
							<Link to='/'>
								<button className='login__form-btn login__form-btn--register'>
									Menu Główne
								</button>
							</Link>
							<button type='submit' className='login__form-btn'>
								Zajerestruj się
							</button>

						</div>
					</div>
				</form>
			</div>
			<Footer />
			</>
	);
};

export default RegisterPage;
