import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
function App() {
	// localhost:3000
	// movie-db.com/id
	return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/add" element={<RegisterPage />} />
      <Route path="/details" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
