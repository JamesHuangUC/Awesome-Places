import React from 'react';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    Text,
    View,
    StyleSheet,
    Platform
} from 'react-native';

const buttonWithBackground = props => {
    const content = (
        <View
            style={[
                styles.viewStyle,
                { backgroundColor: props.color },
                props.disabled ? styles.disabledStyle : null
            ]}
        >
            <Text
                style={
                    props.disabled ? styles.disabledTextStyle : styles.textStyle
                }
            >
                {props.children}
            </Text>
        </View>
    );
    if (props.disabled) {
        return content;
    }
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        );
    }
    return (
        <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    disabledStyle: {
        borderColor: '#ef5350',
        backgroundColor: 'transparent'
    },
    disabledTextStyle: {
        color: '#bcbcbc',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    viewStyle: {
        width: '80%',
        borderWidth: 2,
        borderRadius: 25,
        borderColor: '#e65100',
        marginTop: 20,
        paddingVertical: 13
    }
});

export default buttonWithBackground;
