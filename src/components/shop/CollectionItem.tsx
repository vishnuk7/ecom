import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CollectionItemProps, CollectionItemStyledProps } from './type';

const classes = {
	card: 'card flex flex-col justify-between',
	cardText: 'flex justify-between items-center pt-5',
	price: 'text-2xl font-medium',
};

export const CollectionItem: React.FC<CollectionItemProps> = ({ name, price, imageUrl }) => {
	const nametag = useRef<HTMLHeadingElement>(null);
	const [widthH1, setWidthH1] = useState<number | undefined>();

	useEffect(() => {
		setWidthH1(nametag.current?.offsetWidth);
	}, []);

	console.log(widthH1);

	return (
		<CollectionItemStyled imageUrl={imageUrl} widthH1={widthH1} className='w-full pr-3 pb-8'>
			<div className={classes.card}>
				<div className='bgimg'></div>
				<div className={classes.cardText}>
					<h1 ref={nametag} className='name text-lg'>
						{name}
					</h1>
					<p>
						<span>&#8377; </span>
						<span className={classes.price}>{price && 9 * price}</span>
					</p>
				</div>
			</div>
		</CollectionItemStyled>
	);
};

const CollectionItemStyled = styled.div<CollectionItemStyledProps>`
	width: 100%;
	& .card {
		height: 350px;
		.bgimg {
			background: url(${(props) => props.imageUrl});
			height: 95%;
			width: 100%;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
		}

		.name {
			position: relative;
		}

		.name::before {
			position: absolute;
			content: '';
			width: calc(${({ widthH1 }) => widthH1}px);
			border-radius: 5px;
			top: 30px;
			left: 10px;
			height: 4px;
			/* background: #957dad; */
			background: #957dadb0;
		}

		/* height:  */
	}
`;
