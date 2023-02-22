import {classNames} from '../shared/lib/classNames/classNames';
import './styles/styles.scss';
import {useTheme} from './providers/ThemeProvider';
import {AppRouter} from './providers/Router';
import {Navbar} from 'widgets/Navbar';

const App = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<AppRouter />
			<Navbar />
		</div>
	);
};

export default App;
