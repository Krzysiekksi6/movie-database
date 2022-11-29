import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage'
function App() {
	// localhost:3000
	// movie-db.com/id
	return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
