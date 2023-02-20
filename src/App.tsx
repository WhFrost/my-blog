import {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import {classNames} from './helpers/classNames/classNames';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {MainPageAsync} from './pages/MainPage/MainPage.async';
import './styles/styles.scss';
import {useTheme} from './theme/useTheme';

const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Switch</button>
			<Suspense fallback={<div>Loading</div>}>
				<Routes>
					<Route path='/' element={<MainPageAsync />} />
					<Route path='/about' element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
