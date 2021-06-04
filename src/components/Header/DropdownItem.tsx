import styled from 'styled-components';

interface itemType {
	item: {
		name: string;
		imageUrl: string;
		price: number;
		quantity?: number;
	};
}

export const DropdownItem: React.FC<itemType> = ({ item }) => {
	const { name, imageUrl, price, quantity } = item;

	return (
		<DropdownItemStyled>
			<div className='flex justify-between pb-6'>
				<div>
					<img className='w-24 h-auto' src={imageUrl} alt={name}></img>
				</div>
				<div className='flex flex-col'>
					<p className='text-lg'>{name}</p>
					<div className='flex items-center'>
						<p className='text-gray-500 pr-4'>
							<span className='pr-1 '>&#8377;</span>
							<span className='text-lg font-medium'>{price}</span>
						</p>
						<p className='text-gray-400 text-sm'>
							<span className='pr-1 '>Quantity</span>
							<span className=''>{quantity}</span>
						</p>
					</div>
				</div>
			</div>
		</DropdownItemStyled>
	);
};

const DropdownItemStyled = styled.div``;
