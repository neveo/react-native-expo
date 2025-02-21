import { StyleSheet, Image, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function faq() {
  return (
	<ParallaxScrollView
		headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
		headerImage={
			<MaterialCommunityIcons
				size={310}
				color="#808080"
				name="frequently-asked-questions"
				style={styles.headerImage}
			/>
		}>
	  <ThemedView style={styles.titleContainer}>
		<ThemedText type="title">FAQ</ThemedText>
	  </ThemedView>
	</ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
	headerImage: {
		color: '#808080',
		bottom: -90,
		left: -35,
		position: 'absolute',
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8,
	},
	button: {
		height: 50,
		borderRadius: 20,
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.75)',
		padding: 6,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 4,
	}
});
