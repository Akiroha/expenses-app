import { Text, View } from 'react-native';
import styles from './styles';
import Button from '../Button';

interface ErrorOverlayProps {
	message: string;
	onConfirm?: () => void;
}

const ErrorOverlay = ({ message, onConfirm }: ErrorOverlayProps) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.text, styles.title]}>An error occurred!</Text>
			<Text style={styles.text}>{message}</Text>
			{onConfirm && <Button onPress={onConfirm}>Okay</Button>}
		</View>
	);
};

export default ErrorOverlay;
