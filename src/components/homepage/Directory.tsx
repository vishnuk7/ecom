import { MenuItem } from './MenuItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

export const Directory: React.FC = () => {
	const { directory } = useSelector((state: RootState) => state.data);

	return (
		<>
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-4 h-'>
				{directory.map((item) => {
					if (item.id <= 3) return <MenuItem key={item.id} height='h-64' {...item} />;
					return;
				})}
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
				{directory.map((item) => {
					if (item.id > 3) return <MenuItem key={item.id} height='h-96' {...item} />;
					return;
				})}
			</div>
		</>
	);
};
