import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Card from '../utils/card';


function generateRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    // if (randomNumber <= min || randomNumber >= max) {
    //     generateRandomNumber(min, max);
    // } else {
    return randomNumber;
    // }
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomNumber(1, 100);
    const [guessedNumber, setGuessedNumber] = useState(initialGuess);
    const [guessRound, setGuessRound] = useState([initialGuess])

    useEffect(() => {
        if (guessedNumber === userNumber) {
            onGameOver();
            minBoundary = 1;
            maxBoundary = 100;
        }
    }, [guessedNumber, userNumber, onGameOver])
    //let exclude = props.userNumber;
    function nextGuessHandler(compare) {
        let randomNumber;
        if ((compare === 'isLower' && guessedNumber > userNumber) || (compare === 'isHigher' && guessedNumber < userNumber)) {
            Alert.alert('Misleading', 'Play fair game');
            return;
        }
        if (compare === 'isLower') {
            minBoundary = guessedNumber + 1;
            randomNumber = (generateRandomNumber(minBoundary, maxBoundary));
        } else if (compare === 'isHigher') {
            maxBoundary = guessedNumber;
            randomNumber = generateRandomNumber(minBoundary, maxBoundary);
        }
        setGuessedNumber(randomNumber);
        console.log(randomNumber);
        setGuessRound((guessRoundArray) => [...guessRoundArray, guessedNumber]);
        console.log(guessRound);
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess!</Title>
            <View >
                <Text style={styles.guessedNumber}>{guessedNumber}</Text>
            </View>
            <Card>
                <Text style={styles.text}>Is higher or lower?</Text>
                <View style={styles.buttons}>

                    <View style={styles.indicatorButtons}>
                        <PrimaryButton pressHandle={nextGuessHandler.bind(this, 'isHigher')}>
                            <Ionicons name="md-remove" size={20} color="#ddd" />
                        </PrimaryButton>

                    </View>
                    <View style={styles.indicatorButtons}>
                        <PrimaryButton pressHandle={nextGuessHandler.bind(this, 'isLower')}>
                            <Ionicons name="md-add" size={20} color="#ddd" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                {/* <FlatList
                    data={guessRound}
                    renderItem={(gr) =>
                        <Text>
                            {gr.item}
                        </Text>
                    } /> */}
                <Text>{guessRound}</Text>
            </View>

            <View>

            </View>
        </View>
    );
}
export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        marginTop: 40,
    },
    guessedNumber: {
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 90,
        paddingVertical: 40,
        fontSize: 26,
        color: '#9e9',
        borderColor: '#9e9',
        borderWidth: 3,
        borderRadius: 4,
    },
    text: {
        color: '#ddd',
    },
    buttons: {
        flexDirection: 'row',
    },
    indicatorButtons: {
        flex: 1,
        marginTop: 20,
    }
})