import { configureStore } from '@reduxjs/toolkit';

import expenses from './expenses';

const store = configureStore({
	reducer: {
		expenses,
	},
});

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
export default store;
