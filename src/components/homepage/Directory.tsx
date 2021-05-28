import { useState } from 'react';
import { MenuItem } from './MenuItem';
import { sections } from '../../data/directory.data';

interface dataType {
	id: number;
	title: string;
	imageUrl1: string;
	imageUrl2: string;
	linkUrl: string;
	video: string;
}

export const Directory: React.FC = () => {
	const [menuItems] = useState<dataType[]>(sections);
	console.log(menuItems);

	return (
		<>
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-4 h-'>
				{menuItems.map((item) => {
					if (item.id <= 3) return <MenuItem key={item.id} height='h-64' {...item} />;
					return;
				})}
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
				{menuItems.map((item) => {
					if (item.id > 3) return <MenuItem key={item.id} height='h-96' {...item} />;
					return;
				})}
			</div>
		</>
	);
};
