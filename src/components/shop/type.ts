export interface CollectionPreviewProps {
	id: number;
	title: string;
	routeName: string;
	items: CollectionItemProps[];
}

export interface CollectionItemProps {
	id?: number;
	name?: string;
	imageUrl?: string;
	price?: number;
}

export interface CollectionItemStyledProps extends CollectionItemProps {
	widthH1?: number | undefined;
}
