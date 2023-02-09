import {Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AboutPageAsync} from '../pages/AboutPage/AboutPage.async';
import {MainPageAsync} from '../pages/MainPage/MainPage.async';

const App = () => {
	return (
		<div className='app'>
			<Suspense fallback={<div>Loading</div>}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={MainPageAsync} />
						<Route path='/about' element={AboutPageAsync} />
					</Routes>
				</BrowserRouter>
			</Suspense>
		</div>
	);
};

export default App;
