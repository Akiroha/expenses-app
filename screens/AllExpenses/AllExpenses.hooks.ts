import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../store';
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { fetchAllExpenses } from '../../util/supabase';
import { setExpenses } from '../../store/expenses';

export const useAllExpenses = () => {
	const dispatch = useDispatch();
	const expenses = useSelector((state: StateType) => state.expenses);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useFocusEffect(
		useCallback(() => {
			setLoading(true);
			const getExpenses = async () => {
				const { data, error } = await fetchAllExpenses();

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
