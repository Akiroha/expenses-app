import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../store';
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { fetchRecentExpenses } from '../../util/supabase';
import { setExpenses } from '../../store/expenses';

export const useRecentExpenses = () => {
	const dispatch = useDispatch();
	const expenses = useSelector((state: StateType) => state.expenses);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useFocusEffect(
		useCallback(() => {
			setLoading(true);
			const getExpenses = async () => {
				const { data, error } = await fetchRecentExpenses();

				if (error) {
					setError('Error fetching expenses. Please try again later.');
					setLoading(false);
					return;
				}

				dispatch(setExpenses(data));
				setLoading(false);
			};

			getExpenses();
		}, [])
	);

	return { loading, error, expenses };
};
