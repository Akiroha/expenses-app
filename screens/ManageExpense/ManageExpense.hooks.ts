import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../store';
import { useLayoutEffect, useState } from 'react';
import { supaDeleteExpense, upsertExpense } from '../../util/supabase';
import { addExpense, deleteExpense, updateExpense } from '../../store/expenses';
import { ExpenseType } from '../../types';

export const useManageExpenses = (route: any, navigation: any) => {
	const editedExpenseId = route.params?.id;
	const isEditing = !!editedExpenseId;
	const dispatch = useDispatch();
	const expenses = useSelector((state: StateType) => state.expenses);
	const selectedExpense = expenses.find(
		(expense) => expense.id === editedExpenseId
	);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? 'Edit Expense' : 'Add Expense',
		});
	}, [navigation, isEditing]);

	const deleteExpenseHandler = async () => {
		setLoading(true);
		const { error } = await supaDeleteExpense(editedExpenseId);

		if (error) {
			setError('Error deleting expense. Please try again later.');
			setLoading(false);
			return;
		}

		dispatch(deleteExpense(editedExpenseId));
		setLoading(false);
		navigation.goBack();
	};

	const cancelHandler = () => {
		navigation.goBack();
	};

	const confirmHandler = async (expenseData: ExpenseType) => {
		setLoading(true);
		if (isEditing) {
			const { data, error } = await upsertExpense({
				id: editedExpenseId,
				...expenseData,
			});

			if (error) {
				setError('Error updating expense. Please try again later.');
				setLoading(false);

				return;
			}

			dispatch(updateExpense(data));
		} else {
			const { data, error } = await upsertExpense(expenseData);

			if (error) {
				setError('Error creating expense. Please try again later.');
				setLoading(false);

				return;
			}

			dispatch(addExpense(data));
			setLoading(false);
		}

		navigation.goBack();
	};

	return {
		loading,
		error,
		selectedExpense,
		isEditing,
		deleteExpenseHandler,
		cancelHandler,
		confirmHandler,
	};
};
