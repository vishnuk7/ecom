import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleDropdown } from '../../redux/cart';
import { RootState } from '../../redux';
import React from 'react';

const transitionValues = {
	duration: 0.8,
	repeat: Infinity,
	ease: 'easeOut',
};

const animate = {
	y: ['-20%', '20%', '25%'],
	width: ['0.86rem', '0.8rem', '0.8rem'],
	height: ['0.82rem', '0.8rem', '0.8rem'],
};

const transition = { y: transitionValues, width: transitionValues, height: transitionValues };

export const CartIcon = React.forwardRef<HTMLSpanElement>((props, ref) => {
	const { totalQuantity } = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();

	return (
		<CartIconStyle ref={ref} onClick={() => dispatch(setToggleDropdown())} className='relative'>
			<FiShoppingCart size={25} />
			{totalQuantity > 0 && (
				<motion.div transition={transition} animate={animate} className='circle absolute'></motion.div>
			)}
		</CartIconStyle>
	);
});

const CartIconStyle = styled.span`
	cursor: pointer;

	svg {
		display: inline;
	}

	.circle {
		height: 0.8rem;
		width: 0.8rem;
		background: rgb(59, 130, 246);
		border-radius: 50%;
		top: -4px;
		right: -11px;
	}
`;
