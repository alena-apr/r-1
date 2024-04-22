import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [], 
        // number: this.items.length
	},
	reducers: {
		add: (state, action) => {
			state.items.push(action.payload);
		},
		remove: (state, action) => {
			state.items = state.items.filter(item => item.id !== action.payload)
		}
	},
})

export const { add, remove } = cartSlice.actions

export default cartSlice.reducer