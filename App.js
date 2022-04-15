import { useState } from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';


import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';


export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const [loaded] = useFonts({
    'Roboto': require('./assets/font/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    // <AppLoading />
  }

  function pickedNumberHandler(userNumber) {
    setPickedNumber(userNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function restartGameHandler() {
    setPickedNumber(null);
    
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && pickedNumber) {
    screen = <GameOverScreen target={pickedNumber} restartGame={ restartGameHandler}/>
  }




  return (
    <LinearGradient colors={['#AA2B1D', '#E6DD3B']} style={styles.container}>
      <ImageBackground source={require('./assets/dice.jpg')} style={styles.container} imageStyle={styles.imageBackground} resizeMode='cover'>
        <View>
          <SafeAreaView>{screen}</SafeAreaView>
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
