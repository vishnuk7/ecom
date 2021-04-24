import { Route, Switch } from 'react-router-dom';
import { Homepage, Shop, Form } from './pages';
import { Header } from './components';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Homepage />
				</Route>
				<Route path='/singin'>
					<Form />
				</Route>
				<Route path='/shop/hats'></Route>
				<Route>
					<Shop />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
