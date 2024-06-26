import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export default StyleSheet.create({
	expenseItem: {
		padding: 12,
		marginVertical: 8,
		backgroundColor: GlobalStyles.colors.primary500,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 6,
		elevation: 3,
		shadowColor: GlobalStyles.colors.gray500,
		shadowRadius: 4,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.4,
	},
	textBase: {
		color: GlobalStyles.colors.primary50,
	},
	descriptionStyle: {
		fontSize: 16,
		marginBottom: 4,
		fontWeight: 'bold',
	},
	amountContainer: {
		paddingHorizontal: 12,
		paddingVertical: 4,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		minWidth: 80,
	},
	amountStyle: {
		color: GlobalStyles.colors.primary500,
		fontWeight: 'bold',
	},
	pressedStyle: {
		opacity: 0.75,
	},
});
