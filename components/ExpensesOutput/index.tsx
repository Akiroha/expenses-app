import { Text, View } from 'react-native';
import ExpensesSummary from '../ExpensesSummary';
import ExpensesList from '../ExpensesList';
import { ExpenseType } from '../../types';
import styles from './styles';

interface ExpenseOutputProps {
	expenses: ExpenseType[];
	expensesPeriod: string;
	fallbackText: string;
}

const { container, infoText } = styles;

const ExpenseOutput = ({
	expenses,
	expensesPeriod,
	fallbackText,
}: ExpenseOutputProps) => {
	let content = <Text style={infoText}>{fallbackText}</Text>;

	if (expenses.length > 0) {
		content = <ExpensesList expenses={expenses} />;
	}
	return (
		<View style={container}>
			<ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
			{content}
		</View>
	);
};

export default ExpenseOutput;
