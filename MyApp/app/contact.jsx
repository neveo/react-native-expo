import { StyleSheet, Image, Platform, Text, Pressable } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router'

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Ionicons
          size={310}
          color="#808080"
          name="people-circle"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Contact Us</ThemedText>
      </ThemedView>
      <ThemedText>Get in touch with us or take a look at our FAQ page if you have some general questions.</ThemedText>
      <ThemedText><Link style={styles.link} href="/faq">FAQ</Link></ThemedText>

      <ThemedText>1200 Spring St.
                  Newark NJ 07524
      </ThemedText>
      <ThemedText>Phone: 555-555-5555</ThemedText>

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
  },
  link: {
    textDecorationLine: 'underline',
  }
});
