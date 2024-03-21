import { Text, TextInput, TextInputProps, View } from 'react-native';
import styles from './styles';

interface InputProps {
	label: string;
	textInputConfig: TextInputProps;
	style?: any;
	invalid?: boolean;
}

const Input = ({ label, textInputConfig, style, invalid }: InputProps) => {
	const inputStyles = [styles.input];

	if (textInputConfig && textInputConfig.multiline) {
		// @ts-ignore
		inputStyles.push(styles.inputMultiline);
	}

	if (invalid) {
		// @ts-ignore
		inputStyles.push(styles.invalidInput);
	}
	return (
		<View style={[styles.inputContainer, style]}>
			<Text style={[styles.label, invalid && styles.invalidLabel]}>
				{label}
			</Text>
			<TextInput style={inputStyles} {...textInputConfig} />
		</View>
	);
};

export default Input;
