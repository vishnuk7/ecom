import { createSlice } from '@reduxjs/toolkit';

type itemType = {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	quantity?: number;
};

type stateType = {
	hidden: boolean;
	items: itemType[];
	totalQuantity: number;
	totalPrice: number;
};

const initialState: stateType = {
	hidden: false,
	items: [],
	totalQuantity: 0,
	totalPrice: 0,
};

const slice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleDropdown: (state) => {
			state.hidden = !state.hidden;
		},
		addCart: (state, action) => {
			const item = action.payload;
			const idx = state.items.findIndex((el) => el.id === item.id);

			if (idx >= 0) {
				if (state.items[idx].quantity! >= 0) {
					state.items[idx].quantity = state.items[idx].quantity! + 1;
				}
			} else {
				item.quantity = 1;
				state.items.push(item);
			}
			state.totalQuantity = state.items.reduce((c, { quantity }) => c + quantity!, 0);
			state.totalPrice = state.items.reduce((c, { price }) => c + price, 0) * state.totalQuantity;
		},
		decreaseQuantity: (state, action) => {
			const id = action.payload;
			const idx = state.items.findIndex((el) => el.id === id);
			if (state.items[idx].quantity! > 1) {
				state.items[idx].quantity = state.items[idx].quantity! - 1;
			}
		},
		removeItem: (state, action) => {
			const id = action.payload;
			const idx = state.items.findIndex((el) => el.id === id);

			if (idx > -1) {
				state.items.splice(idx, 1);
				state.totalQuantity = state.items.reduce((c, { quantity }) => c + quantity!, 0);
				state.totalPrice = state.items.reduce((c, { price }) => c + price, 0) * state.totalQuantity;
			}
		},
	},
});

export const setToggleDropdown = () => {
	return slice.actions.toggleDropdown();
};

export const addToCart = (item: itemType) => {
	return slice.actions.addCart(item);
};

export const decreaseQuantity = (id: number) => {
	return slice.actions.decreaseQuantity(id);
};

export const removeItem = (id: number) => {
	return slice.actions.removeItem(id);
};

export default slice.reducer;
