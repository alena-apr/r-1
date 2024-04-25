import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [], 
	},
	reducers: {
		add: (state, action) => {
			state.items.push(action.payload);
			console.log(state.items);
		},
		remove: (state, action) => {
			state.items = state.items.filter(item => item.id !== action.payload);
			console.log(state.items);
		}
	},
})

export const { add, remove } = cartSlice.actions

export default cartSlice.reducer