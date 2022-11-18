import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
function App() {
	// localhost:3000
	// movie-db.com/id
	return (
    <Routes>
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
