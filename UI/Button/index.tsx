import { Pressable, Text, View } from 'react-native';
import styles from './styles';

interface ButtonProps {
	children: string;
	onPress: () => void;
	mode?: string;
	style?: any;
}

const Button = ({ children, onPress, mode, style }: ButtonProps) => {
	return (
		<View style={style}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) => pressed && styles.pressedStyle}
			>
				<View style={[styles.button, mode === 'flat' && styles.flat]}>
					<Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
						{children}
					</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default Button;
