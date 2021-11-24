import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ children, style, onPress }) => {
    const buttonStyle = { ...styles.buttonContainer, ...style }
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 32,
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
})

export default Button