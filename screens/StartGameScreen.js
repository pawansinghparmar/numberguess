import { View, TextInput, StyleSheet, Text, Alert } from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Card from '../utils/card';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    };

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || (chosenNumber < 1) || (chosenNumber > 99)) {
            Alert.alert(
                "Invalid Number",
                "enter number between 1 and 99",
                [
                    {
                        text: "Okay", style: "destructive",
                        onPress: resetInputHanler,
                    },
                ]
            );
        } else {
            onPickNumber(chosenNumber);
        };
    }

    function resetInputHanler() {
        setEnteredNumber('');
    };
    return (
        <View style={styles.container}>
            <Title >Guess My Number</Title>
            <Card style={styles.inputContainer}>
                <Text style={styles.text}>Enter a Number</Text>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    value={enteredNumber}
                    onChangeText={numberInputHandler} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton pressHandle={resetInputHanler}>Reset</PrimaryButton>

                    </View>
                    <View style={styles.buttonContainer}>

                        <PrimaryButton pressHandle={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>

                </View>
            </Card>
        </View>
    );

};
export default StartGameScreen;

const styles = StyleSheet.create({
    container: { marginTop: 40, },
    numberInput: {
        color: '#ddd',
        borderBottomColor: '#ddd',
        borderBottomWidth: 3,
        marginVertical: 16,
        fontSize: 28,
        fontWeight: '600',
        width: 47,
        height: 47,
        textAlign: 'center',
        fontFamily: 'Roboto',
    },
    text: {
        color: '#ddd',
        fontFamily: 'Roboto',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})
