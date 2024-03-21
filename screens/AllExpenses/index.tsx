import ExpenseOutput from '../../components/ExpensesOutput';
import LoadingOverlay from '../../UI/LoadingOverlay';
import ErrorOverlay from '../../UI/ErrorOverlay';
import { useAllExpenses } from './AllExpenses.hooks';

const AllExpensesScreen = () => {
	const { error, loading, expenses } = useAllExpenses();

	if (loading) {
		return <LoadingOverlay />;
	}

	if (error) {
		return <ErrorOverlay message={error} />;
	}

	return (
		<ExpenseOutput
			expenses={expenses}
			expensesPeriod="Total"
			fallbackText="No registered expenses found!"
		/>
	);
};

export default AllExpensesScreen;
