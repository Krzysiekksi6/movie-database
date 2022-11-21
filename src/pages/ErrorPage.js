import './css/ErrorPage.css';

const ErrorPage = () => {
	return (
		<div className='header'>
			<div className='header__text'>
				<h1 className='header__heading'>
					4
					<span>
						<i className='fa-regular fa-face-frown movie-logo'></i>
					</span>
					4
				</h1>
				<h2 className='header__description--first'>opps! page not found</h2>
				<p className='header__description--second'>
					Sorry, the page you're looking for doesn't exist. If you think
					something is broken report a problem
				</p>
				<a href='/' className='header__btn btn-special-animation'>
					return home
				</a>
			</div>

			<div className='header__hero-img'></div>
			<div className='header__hero-shadow'></div>
		</div>
	);
};

export default ErrorPage;
