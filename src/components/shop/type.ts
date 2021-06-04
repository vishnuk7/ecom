export interface CollectionPreviewProps {
	id: number;
	title: string;
	routeName: string;
	items: itemType[];
}

interface itemType {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}

export interface CollectionItemProps {
	item: itemType;
}

export interface CollectionItemStyledProps {
	widthH1?: number | undefined;
	imageUrl: string;
}
