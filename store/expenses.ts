import { createSlice } from '@reduxjs/toolkit';
import { ExpenseType } from '../types';

const initialState: ExpenseType[] = [];

const expensesSlice = createSlice({
	name: 'expenses',
	initialState,
	reducers: {
		addExpense: (state, action) => {
			state.push(action.payload);
		},
		setExpenses: (state, action) => {
			return action.payload;
		},
		deleteExpense: (state, action) => {
			const index = state.findIndex((expense) => expense.id === action.payload);

			if (index !== -1) {
				state.splice(index, 1);
			}
		},
		updateExpense: (state, action) => {
			const index = state.findIndex(
				(expense) => expense.id === action.payload.id
			);
			if (index !== -1) {
				state[index] = action.payload;
			}
		},
	},
});

export default expensesSlice.reducer;
export const { addExpense, deleteExpense, updateExpense, setExpenses } =
	expensesSlice.actions;
