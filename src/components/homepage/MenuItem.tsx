import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

interface MenuItemProps {
	imageUrl1: string;
	imageUrl2: string;
	title?: string;
	height?: string;
	position?: string;
	linkUrl?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ imageUrl1, imageUrl2, height, position, title, linkUrl }) => {
	const history = useHistory();

	return (
		<MenuItemsStyled
			onClick={() => linkUrl && history.push(linkUrl)}
			imageUrl1={imageUrl1}
			imageUrl2={imageUrl2}
			position={position}
			className={`${height} py-4 px-5  bg-black flex justify-center items-center relative`}>
			<div className='background absolute z-10 w-full h-full top-0'></div>
			<div className='withoutbackground absolute z-20 w-full h-full top-0'></div>
			<div className='title-box z-30 text-3xl text-gray-100 py-3 px-5'>
				<span className='font-medium'>{title?.toUpperCase()}</span>
			</div>
		</MenuItemsStyled>
	);
};

const MenuItemsStyled = styled.div<MenuItemProps>`
	overflow: hidden;

	.title-box {
		background: rgba(255, 255, 255, 0.25);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		transition: all 0.3s;
		/* border-radius: 10px; */
		/* border: 5px solid rgb(170 170 170); */

		& span {
			text-shadow: 0 2px 4px rgba(71, 97, 206, 0.36);
			letter-spacing: 7.2px;
		}
	}
	.background {
		background: url(${(props) => props.imageUrl1});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		transition: all 0.3s;
	}

	.withoutbackground {
		background: url(${(props) => props.imageUrl2});
		${(props) => props.position};
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		transition: all 0.3s;
	}

	&:hover .background {
		cursor: pointer;
		filter: blur(10px);
	}

	&:hover .title-box {
		transform: scale(1.1);
	}

	&:hover .withoutbackground {
		cursor: pointer;
		/* transform: scale(1.1); */
	}
`;
