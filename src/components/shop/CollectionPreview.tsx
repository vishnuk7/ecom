import { CollectionItem } from './CollectionItem';
import { CollectionPreviewProps } from './type';

export const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => {
	return (
		<div>
			<h3 className='text-2xl py-5'>{title}</h3>
			<div className='flex flex-col lg:flex-row justify-between'>
				{items
					.filter((data, idx) => idx < 4)
					.map((data) => (
						<CollectionItem key={data.id} {...data} />
					))}
			</div>
		</div>
	);
};
