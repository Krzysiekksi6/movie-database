import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer'
import Content from '../components/Content'
import './css/Home.css';

const Home = () => {
    return(
        <div className='home'>
            <NavigationBar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default Home;