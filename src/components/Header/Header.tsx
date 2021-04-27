import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../../firebase/firebase.util';

const classes = {
	container: 'flex justify-between pt-2 pb-5',
};

export const Header = () => {
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
				<Link to='/' onClick={() => auth.signOut()}>
					SING OUT
				</Link>
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
