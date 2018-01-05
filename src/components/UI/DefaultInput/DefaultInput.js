import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
    <TextInput
        underlineColorAndroid="transparent"
        placeholderTextColor={
            props.placeholderTextColor ? props.placeholderTextColor : null
        }
        {...props}
        style={[
            styles.inputStyle,
            props.style,
            !props.valid && props.touched ? styles.invalidStyle : null
        ]}
    />
);

const styles = StyleSheet.create({
    inputStyle: {
        width: '100%',
        borderRadius: 15,
        borderWidth: 1,
        paddingHorizontal: 16,
        marginBottom: 5,
        fontSize: 16
    },
    invalidStyle: {
        borderColor: 'red'
    }
});

export default defaultInput;
