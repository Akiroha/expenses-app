import { Text, View } from 'react-native';
import { ExpenseType } from '../../types';

interface ExpensesSummaryProps {
	expenses: ExpenseType[];
	periodName: string;
}

import styles from './styles';
const { container, period, sum } = styles;

const ExpensesSummary = ({ expenses, periodName }: ExpensesSummaryProps) => {
	const expensesSum = expenses?.reduce(
		(sum, expense) => sum + expense.amount!,
		0
	);

	return (
		<View style={container}>
			<Text style={period}>{periodName}</Text>
			<Text style={sum}>${expensesSum?.toFixed(2)}</Text>
		</View>
	);
};

export default ExpensesSummary;
