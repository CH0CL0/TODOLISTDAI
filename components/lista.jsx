import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Lista = (props) => {
    return (
        <View style={styles.container}>
            <Text>Todo list</Text>
            <Text style={styles.text}>{props.item}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        borderColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 10,
    }
});

export default Lista;