import { Text, StyleSheet } from 'react-native';


function Title({ children }) {
    return <Text style={styles.textContainer}>{children}</Text>;
}
export default Title;
const styles = StyleSheet.create({
    textContainer: {

        paddingHorizontal: 48,
        paddingVertical: 12,
        alignSelf: 'center',
        fontSize: 16,
        color: '#ddd',
        borderColor: '#ddd',
        borderWidth: 2,
        fontFamily:'Roboto'

    }
});