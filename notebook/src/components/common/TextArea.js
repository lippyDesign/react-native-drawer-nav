import React from 'react';
import { TextInput, View, Text } from 'react-native';

const TextArea = ({ label, value, onChangeText, placeholder, secureTextEntry, additionalStyles }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    let cntStyle = containerStyle;
    let lblStyle = labelStyle;
    let inptStyle = inputStyle;

    if (additionalStyles) {
        cntStyle = additionalStyles.containerStyle ? [containerStyle, additionalStyles.containerStyle] : containerStyle;
        lblStyle = additionalStyles.labelStyle ? [labelStyle, additionalStyles.labelStyle] : labelStyle;
        inptStyle = additionalStyles.inputStyle ? [inputStyle, additionalStyles.inputStyle] : inputStyle;
    }

    return (
        <View style={cntStyle}>
            <Text style={lblStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inptStyle}
                value={value}
                onChangeText={onChangeText}
                multiline
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 8
    },
    labelStyle: {
        fontSize: 18,
        flex: 1
    },
    containerStyle: {
        height: 230,
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1
    }
};

export { TextArea };
