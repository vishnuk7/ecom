import { Route, Switch } from 'react-router-dom';
import { Homepage, Shop } from './pages';
import { Header } from './components/Header';

const Hats = () => {
	return <h2>HATS</h2>;
};

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Homepage />
				</Route>
				<Route path='/shop/hats'>
					<Hats />
				</Route>
				<Route>
					<Shop />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
