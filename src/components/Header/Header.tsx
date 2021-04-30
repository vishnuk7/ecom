import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { auth } from '../../firebase/firebase.util';

const classes = {
	container: 'flex justify-between pt-2 pb-5',
};

interface stateProps {
	user: {
		currentUser: string | null;
	};
}

export const Header: React.FC = () => {
	const { currentUser } = useSelector((state: stateProps) => state.user);

	console.log(currentUser);

	return (
		<HeaderStyled className={classes.container}>
			<div>
				<Link to='/'>
					<span>Mey\</span>
				</Link>
			</div>
			<div className='options '>
				<Link to='/shop'>SHOP</Link>
				<Link to='/shop'>CONTACT</Link>
				{/* {currentUser ? (
					<Link to='/' onClick={() => auth.signOut()}>
						SING OUT
					</Link>
				) : (
					<Link to='/signin' onClick={() => auth.signOut()}>
						SING IN
					</Link>
				)} */}
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
