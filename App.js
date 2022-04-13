
import {View, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
export default function App() {
  return (
    <LinearGradient colors={['#AA2B1D', '#E6DD3B']} style={styles.container}>
      <ImageBackground source={require('./assets/dice.jpg')} style={styles.container} imageStyle={styles.imageBackground} resizeMode='cover'>
        <View>
            <StartGameScreen />
        </View>
      </ImageBackground>
    </LinearGradient>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.2,
  }
});
