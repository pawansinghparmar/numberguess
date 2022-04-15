import { View, Image, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Card from '../utils/card';


function GameOverScreen({ target,restartGame }) {
    return (
        <View style={styles.container} >
            <Title>
                GAME OVER
            </Title>
            <Card>
                <Text style={styles.text}>
                    Got the correct Number {target}
                </Text>
            </Card>
            <Image style={styles.image} source={require('../assets/success.jpg')} />

            <View style={styles.restartButton}>

                <PrimaryButton pressHandle={restartGame}>Restart Game</PrimaryButton>

            </View>
        </View>
    );
}
export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        marginVertical: 40,

    },
    image: {
        alignSelf: 'center',
        marginTop: 20,
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    text: {
        color: '#ddd'
    },
    restartButton: {
        marginTop: 20,
        marginHorizontal: 20,
    }
})


