import { Pressable, Text, View } from 'react-native';
import { ExpenseType } from '../../types';
import styles from './styles';
import { useExpenseItem } from './ExpenseItem.hooks';

interface ExpenseItemProps {
	expense: ExpenseType;
}

const {
	expenseItem,
	textBase,
	amountContainer,
	amountStyle,
	descriptionStyle,
	pressedStyle,
} = styles;
const ExpenseItem = ({ expense }: ExpenseItemProps) => {
	const { expensePressHandler, description, amount, localDate } =
		useExpenseItem(expense);

	return (
		<Pressable
			onPress={expensePressHandler}
			style={({ pressed }) => pressed && pressedStyle}
		>
			<View style={expenseItem}>
				<View>
					<Text style={[textBase, descriptionStyle]}>{description}</Text>
					<Text style={textBase}>{localDate.toLocaleDateString()}</Text>
				</View>
				<View style={amountContainer}>
					<Text style={amountStyle}>{amount!.toFixed()}</Text>
				</View>
			</View>
		</Pressable>
	);
};

export default ExpenseItem;
