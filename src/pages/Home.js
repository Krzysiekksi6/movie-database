import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer'
import './css/Home.css';

const Home = () => {
    return(
        <div className='home'>
            <NavigationBar/>
            <Footer/>
        </div>
    );
}

export default Home;