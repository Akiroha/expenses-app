import { Text, View } from 'react-native';
import Input from '../Input';
import styles from './styles';
import Button from '../../UI/Button';
import { ExpenseType } from '../../types';
import { useExpenseForm } from './ExpenseForm.hooks';

interface ExpenseFormProps {
	onCancel: () => void;
	onSubmit: (param: ExpenseType) => void;
	submitButtonLabel: string;
	defaultValues?: ExpenseType;
}

const ExpenseForm = ({
	onCancel,
	onSubmit,
	submitButtonLabel,
	defaultValues,
}: ExpenseFormProps) => {
	const { inputs, inputChangedHandler, submitHandler, formIsInvalid } =
		useExpenseForm(onSubmit, defaultValues);

	return (
		<View style={styles.form}>
			<Text style={styles.title}>Your Expense</Text>
			<View style={styles.inputsRow}>
				<Input
					style={styles.rowInput}
					label="Amount"
					invalid={!inputs.amount.isValid}
					textInputConfig={{
						keyboardType: 'decimal-pad',
						onChangeText: inputChangedHandler.bind(this, 'amount'),
						value: inputs.amount.value,
					}}
				/>
				<Input
					style={styles.rowInput}
					label="Date"
					invalid={!inputs.date.isValid}
					textInputConfig={{
						placeholder: 'YYYY-MM-DD',
						maxLength: 10,
						onChangeText: inputChangedHandler.bind(this, 'date'),
						value: inputs.date.value,
					}}
				/>
			</View>
			<Input
				label="Description"
				invalid={!inputs.description.isValid}
				textInputConfig={{
					multiline: true,
					autoCapitalize: 'sentences',
					onChangeText: inputChangedHandler.bind(this, 'description'),
					value: inputs.description.value,
				}}
			/>
			{formIsInvalid && (
				<Text style={styles.errorText}>
					Invalid input values - please check your entered data!
				</Text>
			)}
			<View style={styles.buttons}>
				<Button style={styles.button} mode="flat" onPress={onCancel}>
					Cancel
				</Button>
				<Button style={styles.button} onPress={submitHandler}>
					{submitButtonLabel}
				</Button>
			</View>
		</View>
	);
};

export default ExpenseForm;
