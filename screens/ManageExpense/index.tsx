import { View } from 'react-native';
import IconButton from '../../UI/IconButton';
import { GlobalStyles } from '../../constants/styles';
import styles from './styles';
import ExpenseForm from '../../components/ExpenseForm';
import LoadingOverlay from '../../UI/LoadingOverlay';
import ErrorOverlay from '../../UI/ErrorOverlay';
import { useManageExpenses } from './ManageExpense.hooks';

interface ManageExpensesProps {
	route: any;
	navigation: any;
}

const { container, deleteContainer } = styles;

const ManageExpenses = ({ route, navigation }: ManageExpensesProps) => {
	const {
		loading,
		error,
		selectedExpense,
		isEditing,
		deleteExpenseHandler,
		cancelHandler,
		confirmHandler,
	} = useManageExpenses(route, navigation);

	if (loading) {
		return <LoadingOverlay />;
	}

	if (error) {
		return <ErrorOverlay message={error} />;
	}

	return (
		<View style={container}>
			<ExpenseForm
				onCancel={cancelHandler}
				submitButtonLabel={isEditing ? 'Update' : 'Add'}
				onSubmit={confirmHandler}
				defaultValues={selectedExpense}
			/>
			{isEditing && (
				<View style={deleteContainer}>
					<IconButton
						icon="trash"
						color={GlobalStyles.colors.error500}
						size={36}
						onPress={deleteExpenseHandler}
					/>
				</View>
			)}
		</View>
	);
};

export default ManageExpenses;
