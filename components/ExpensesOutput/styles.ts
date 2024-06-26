import { StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: 24,
		backgroundColor: GlobalStyles.colors.primary700,
	},
	infoText: {
		color: 'white',
		fontSize: 16,
		textAlign: 'center',
		marginTop: 32,
	},
});
