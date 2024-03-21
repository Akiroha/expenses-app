import { Database } from './supabase';

export type ExpenseType = Database['public']['Tables']['expenses']['Update'];
