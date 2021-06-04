import { AnimatePresence, motion } from 'framer-motion';
import onClickOutside from 'react-onclickoutside';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux';
import { CustomBtn } from '../CusttomBtn';
import { DropdownItem } from './DropdownItem';
import cartSvg from '../../assets/cart.svg';
import { Link } from 'react-router-dom';
import { setToggleDropdown } from '../../redux/cart';
import { Props } from 'framer-motion/types/types';
import React from 'react';

const height: string[] = [];
const opacity: number[] = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

let i = 1;
while (i <= 25) {
	height.push(`${i}rem`);
	i += 0.01;
}
const animate = {
	height,
	opacity,
};

// const exitHeight = height.reverse();
// const exitOpacity = opacity.reverse();
// // const exitAnimate = {
// // 	height: exitHeight,
// // 	opacity: exitOpacity,
// // };

const transitionValue = {
	type: 'tween',
	duration: 0.4,
};

const transition = {
	height: transitionValue,
	opacity: transitionValue,
};

export const Dropdown = () => {
	const { hidden, items, totalQuantity, totalPrice } = useSelector((state: RootState) => state.cart);

	return (
		<AnimatePresence>
			{hidden && (
				<DropdownStyle
					initial={{ opacity: 0 }}
					animate={animate}
					transition={transition}
					exit={{ opacity: 0 }}
					className='flex flex-col absolute w-80 h-80 rounded-md bg-white shadow-2xl'>
					{totalQuantity > 0 ? (
						<>
							<div className='p-6 pb-1 flex  justify-between'>
								<div className='flex'>
									<FiShoppingCart size={28} className='pr-1'></FiShoppingCart>
									<div className='bg-primary text-white w-1 h-1 rounded-full p-3 flex items-center justify-center'>
										{totalQuantity}
									</div>
								</div>
								<div className='flex items-center'>
									<p className='text-sm text-gray-400 pr-1'>Total:</p>
									<p className='text-lg'>&#8377;&nbsp;{totalPrice}</p>
								</div>
							</div>
							<div className='overflow-y-auto p-6 h-4/5'>
								{items.map((item) => (
									<DropdownItem key={item.id} item={item} />
								))}
							</div>
							<div className='flex justify-center p-6 pt-1'>
								<Link to='/checkout'>
									<CustomBtn
										type='button'
										value='Checkout'
										bgColor='bg-primary'
										textColor='text-white'
									/>
								</Link>
							</div>
						</>
					) : (
						<div className='flex flex-col justify-center items-center h-full'>
							<img src={cartSvg} alt='cart svg' className='h-20' />
							<p className='py-4'>Your Cart is Empty</p>
							<p className='text-gray-500 text-sm px-4 text-center'>
								Looks like you haven't added item added any items to you cart
							</p>
						</div>
					)}
				</DropdownStyle>
			)}
		</AnimatePresence>
	);
};

const DropdownStyle = styled(motion.div)`
	z-index: 31;
	right: 0;
	top: 45px;
`;
