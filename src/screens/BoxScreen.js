import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>Box</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 1,
		borderColor: 'black',
	},
	textStyle: {
		borderWidth: 1,
		borderColor: 'red',
		margin: 20,
	},
});

export default BoxScreen;
