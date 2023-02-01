import { Route, Routes, Navigate } from 'react-router-dom';
import { isExpired } from "react-jwt";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Details from "./pages/Details";
import AddMovie from "./pages/AddMovie";
function App() {
	// localhost:3000
	// movie-db.com/id
	return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
        <Route path="signin" element={!isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <LoginPage/>} />
        <Route path="signup" element={!isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <RegisterPage/>} />
      <Route path="/add" element={isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <AddMovie/>}/>
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
