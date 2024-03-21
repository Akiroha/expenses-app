import ExpenseOutput from '../../components/ExpensesOutput';
import LoadingOverlay from '../../UI/LoadingOverlay';
import ErrorOverlay from '../../UI/ErrorOverlay';
import { useRecentExpenses } from './RecentExpenses.hooks';

const RecentExpenses = () => {
	const { loading, expenses, error } = useRecentExpenses();

	if (loading) {
		return <LoadingOverlay />;
	}

	if (error) {
		return <ErrorOverlay message={error} />;
	}

	return (
		<ExpenseOutput
			expenses={expenses}
			expensesPeriod="Last 7 Days"
			fallbackText="No expenses registered for the last 7 days."
		/>
	);
};

export default RecentExpenses;
