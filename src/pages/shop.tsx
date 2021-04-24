import { useState } from 'react';
import { SHOP_DATA } from '../data/collection.data';
import { CollectionPreview } from '../components/shop';

export const Shop = () => {
	const [shopData, setShopData] = useState(SHOP_DATA);

	return (
		<div>
			{shopData.map((data) => (
				<CollectionPreview key={data.id} {...data} />
			))}
		</div>
	);
};
