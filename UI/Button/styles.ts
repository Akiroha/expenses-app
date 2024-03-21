import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export default StyleSheet.create({
	button: {
		borderRadius: 4,
		padding: 8,
		backgroundColor: GlobalStyles.colors.primary500,
	},
	flat: {
		backgroundColor: 'transparent',
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
	},
	flatText: {
		color: GlobalStyles.colors.primary200,
	},
	pressedStyle: {
		opacity: 0.75,
		backgroundColor: GlobalStyles.colors.primary100,
		borderRadius: 4,
	},
});
