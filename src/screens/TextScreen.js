import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextScreen = () => {
	const [currentText, setCurrentText] = useState('');
	return (
		<View>
			<TextInput style={styles.input} autoCapitalize='none' autoCorrect={false} value={currentText} onChangeText={value => setCurrentText(value)} />
			<Text>Your name is {currentText}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
	},
});

export default TextScreen;
