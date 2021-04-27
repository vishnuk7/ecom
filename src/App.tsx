import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage, Shop, Form } from './pages';
import { Header } from './components';
import { auth, createProfile } from './firebase/firebase.util';

const App = () => {
	const [currentUser, setCurrentUser] = useState<{ id: string } | null>(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createProfile(userAuth);
				if (userRef)
					userRef.onSnapshot((snapShot) => {
						setCurrentUser({
							id: snapShot.id,
							...snapShot.data(),
						});
					});
			} else {
				setCurrentUser(null);
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);

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
