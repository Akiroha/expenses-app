import { FlatList } from 'react-native';
import { ExpenseType } from '../../types';
import ExpenseItem from '../ExpenseItem';

interface ExpensesListProps {
	expenses: ExpenseType[];
}

const renderExpenseItem = (itemData: { item: ExpenseType }) => {
	return <ExpenseItem expense={itemData.item} />;
};

const ExpensesList = ({ expenses }: ExpensesListProps) => {
	return (
		<FlatList
			data={expenses}
			renderItem={renderExpenseItem}
			keyExtractor={(item) => item.id!}
		/>
	);
};

export default ExpensesList;
