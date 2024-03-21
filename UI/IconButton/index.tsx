import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

interface IconButtonProps {
	icon: any;
	onPress: () => void;
	size?: number;
	color?: string;
}

const { buttonContainer, pressedStyle } = styles;

const IconButton = ({ icon, onPress, size, color }: IconButtonProps) => {
	return (
		<Pressable
			style={({ pressed }) => pressed && pressedStyle}
			onPress={onPress}
		>
			<View style={buttonContainer}>
				<Ionicons name={icon} size={size} color={color} />
			</View>
		</Pressable>
	);
};

export default IconButton;
