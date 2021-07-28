import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			{/* <Text style={styles.text}>Image Screen</Text> */}
			<ImageDetail title='Forest' imgSource={require('../../assets/forest.jpg')} score="9" />
			<ImageDetail title='Beach' imgSource={require('../../assets/beach.jpg')} score="7"/>
			<ImageDetail title='Mountain' imgSource={require('../../assets/mountain.jpg')} score="10" />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default ImageScreen;
