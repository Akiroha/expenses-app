import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { ExpenseType } from '../types';
import { getDateMinusDays } from './date';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_ANON_KEY;

const supabase = createClient(supabaseUrl!, supabaseAnonKey!, {
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});

const EXPENSES = 'expenses';

export const upsertExpense = async (expenseData: ExpenseType) => {
	return supabase.from(EXPENSES).upsert(expenseData).select().single();
};

export const fetchAllExpenses = async () => {
	return supabase.from(EXPENSES).select().order('date', { ascending: false });
};

export const fetchRecentExpenses = async () => {
	const today = new Date();
	const date7DaysAgo = getDateMinusDays(today, 7);

	return supabase
		.from(EXPENSES)
		.select()
		.gte('date', date7DaysAgo.toISOString())
		.lte('date', today.toISOString())
		.order('date', { ascending: false });
};

export const supaDeleteExpense = async (id: string) => {
	return supabase.from(EXPENSES).delete().eq('id', id);
};
