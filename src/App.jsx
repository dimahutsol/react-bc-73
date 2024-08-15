import { Routes, Route, Navigate } from 'react-router-dom';
import Props from './pages/Props/Props';
import Points from './pages/Points/Points';
import Quize from './pages/Quize/Quize';
import Todos from './pages/Todos/Todos';
import Photos from './pages/Photos/Photos';
import HomePage from './pages/HomePage/HomePage';
import { Header } from './components';
import Countries from './pages/Countries/Countries';
import SearchCountries from './pages/SearchCountries/SearchCounties';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/photos' element={<Photos />} />
				<Route path='/quize' element={<Quize />} />
				<Route path='/points' element={<Points />} />
				<Route path='/props' element={<Props />} />
				<Route path='/todos' element={<Todos />} />
				<Route path='/countries' element={<Countries />} />
				<Route path='/searchCountries' element={<SearchCountries />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</>
	);
}

export default App;
