import React from 'react';
import {Link} from 'react-router-dom';
import './css/LoginPage.css';
const LoginPage = () => {
	return (
		<div className='login'>
			<h2 className='login-heading'>Logowanie</h2>

			<form className='login__form'>
				<div className='login__form-top'>
					<label for='email' class='login__form-label'>
						E-mail
					</label>
					<input type='email' className='login__form-input' id='email' placeholder='mail@example.com' />
					<label for='password' className='login__form-label'>
						Hasło
					</label>
					<input type='password' className='login__form-input' placeholder='***********'></input>
					<div className='login__form-btns'>
						<button type='submit' className='login__form-btn'>
							Zaloguj
						</button>
						<Link to='/register'>
						<button className='login__form-btn login__form-btn--register'>
							Zajerestruj się
						</button>
						</Link>
						
					</div>
				</div>
			</form>
		</div>
	);
};
export default LoginPage;
