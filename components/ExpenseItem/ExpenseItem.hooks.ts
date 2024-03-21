import { useNavigation } from '@react-navigation/native';
import { ExpenseType } from '../../types';

export const useExpenseItem = (expense: ExpenseType) => {
	const { description, amount, date } = expense;
	const { navigate } = useNavigation();

	const expensePressHandler = () => {
		// @ts-ignore
		navigate('ManageExpense', {
			id: expense.id,
		});
	};

	const dbDate = new Date(date!);
	const localDate = new Date(
		dbDate.getTime() + dbDate.getTimezoneOffset() * 60000
	);

	return {
		expensePressHandler,
		description,
		amount,
		localDate,
	};
};
