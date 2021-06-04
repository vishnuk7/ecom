import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Homepage, Shop, Form } from './pages';
import { Header } from './components';
import { auth, createProfile } from './firebase/firebase.util';
import { setCurrentUser } from './redux/users';
import { RootState } from './redux';
import { Checkout } from './pages/checkout';

const App = () => {
	const { currentUser } = useSelector((state: RootState) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createProfile(userAuth);
				if (userRef)
					userRef.onSnapshot((snapShot) => {
						const payload = {
							id: snapShot.id,
							...snapShot.data(),
						};
						dispatch(setCurrentUser(payload));
					});
			}
		});
		return () => {
			unsubscribe();
		};
	}, [dispatch]);

	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Homepage />
				</Route>
				<Route path='/signin'>{!currentUser ? <Form /> : <Redirect to='/' />}</Route>
				<Route path='/shop/hats'></Route>
				<Route path='/shop'>
					<Shop />
				</Route>
				<Route path='/checkout'>
					<Checkout />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
