import { View, StyleSheet } from 'react-native';
import { children } from 'react';
function Card({ children }) {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
};
export default Card;
const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: 40,
        backgroundColor: '#FF616D',
        elevation: 8,
        shadowColor: '#111',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 34,
        alignItems: 'center',
    },
})