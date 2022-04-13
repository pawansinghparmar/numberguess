import { View, Text, Pressable, StyleSheet } from 'react-native'

function PrimaryButton({ children, pressHandle }) {

    return (
        <View style={styles.outerContainer}>
            <Pressable style={styles.innerContainer} onPress={pressHandle} android_ripple={{ color: '#FFEAC9' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

    );
}
export default PrimaryButton;

const styles = StyleSheet.create({
    outerContainer: {

        borderRadius: 22,
        margin: 4,
        overflow: 'hidden',
        elevation: 8,

    },
    innerContainer: {
        backgroundColor: '#D83A56',
        paddingHorizontal: 8,
        paddingVertical: 8,



    },
    buttonText: {
        color: '#ddd',
        textAlign: 'center',
    }
})