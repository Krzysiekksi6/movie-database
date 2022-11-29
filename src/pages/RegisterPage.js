import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
	return (
		<div className='register'>
			<h2 className='login-heading'>Rejestracja</h2>

			<form className='login__form'>
				<div className='login__form-top'>
					<label for='login' class='login__form-label'>
						Login
					</label>
					<input type='text' className='login__form-input' id='login' placeholder='Nickname' />
					<label for='email' class='login__form-label'>
						E-mail
					</label>
					<input type='email' className='login__form-input' id='email' placeholder='email@example.com'/>
					<label for='password' className='login__form-label'>
						Hasło
					</label>
					<input type='password' className='login__form-input' placeholder='*********'></input>
					<div className='login__form-btns'>
						<button type='submit' className='login__form-btn'>
							Zajerestruj się
						</button>
						<Link to='/'>
							<button className='login__form-btn login__form-btn--register'>
								Menu Główne
							</button>
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default RegisterPage;
