import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux';

const height: string[] = [];
const opacity: number[] = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

let i = 1;
while (i <= 20) {
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
	const { hidden } = useSelector((state: RootState) => state.cart);

	return (
		<AnimatePresence>
			{hidden && (
				<DropdownStyle
					initial={{ opacity: 0 }}
					animate={animate}
					transition={transition}
					exit={{ opacity: 0 }}
					className='absolute w-80 h-80 rounded-md bg-white border border-gray-400 shadow-2xl'>
					Dropdown 😜
				</DropdownStyle>
			)}
		</AnimatePresence>
	);
};

const DropdownStyle = styled(motion.div)`
	z-index: 31;
	right: 0;
	top: 32px;
`;
