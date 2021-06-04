import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { auth } from '../../firebase/firebase.util';
import { Dropdown } from './Dropdown';
import { CartIcon } from './CartIcon';

const classes = {
	container: 'flex justify-between pt-2 pb-5',
};

interface stateProps {
	users: {
		currentUser: string | null;
	};
}

export const Header: React.FC = () => {
	const { currentUser } = useSelector((state: stateProps) => state.users);

	return (
		<HeaderStyled className={classes.container}>
			<div>
				<Link to='/'>
					<span>Mey\</span>
				</Link>
			</div>
			<div className='flex items-center options relative'>
				<Link to='/shop'>SHOP</Link>
				<Link to='/shop'>CONTACT</Link>
				{currentUser ? (
					<Link to='/' onClick={() => auth.signOut()}>
						SING OUT
					</Link>
				) : (
					<Link to='/signin' onClick={() => auth.signOut()}>
						SING IN
					</Link>
				)}
				<CartIcon />

				<Dropdown />
			</div>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.div`
	& .options {
		a {
			margin-right: 1rem;
		}
	}
`;
