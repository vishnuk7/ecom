export const Homepage = () => {
	return (
		<div className='grid grid-cols-3 gap-4'>
			<div>Menu Item</div>
			<div>Menu Item</div>
			<div>Menu Item</div>
			<div className='grid grid-cols-2 col-span-2'>
				<div className='col-span-1'>Menu Item</div>
			</div>
			<div>Menu Item</div>
		</div>
	);
};
