import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('');
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || (chosenNumber < 1) || (chosenNumber > 99)) {
            // Alert.alert('Invalid Number!','enter number between 1 and 99',[] );
            alert('no');
        } else {
            // Alert.alert(chosenNumber);
            alert('yes');
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                value={enteredNumber}
                onChangeText={numberInputHandler} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>

                </View>
                <View style={styles.buttonContainer}>

                    <PrimaryButton pressHandle={confirmInputHandler}>Confirm</PrimaryButton>
                </View>

            </View>
        </View>
    );

};
export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: 80,
        backgroundColor: '#FF616D',
        elevation: 8,
        shadowColor: '#111',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 34,
        alignItems: 'center',
    },
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
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})