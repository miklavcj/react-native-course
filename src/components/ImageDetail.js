import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const imageDetail = ({ title, imgSource, score }) => {
	return (
		<View style={styles.imgContainer}>
            <Image source={imgSource}/>
            
			<Text>{title}</Text>
			<Text>Image score - {score}</Text>
		</View>
	);
};

export default imageDetail;

const styles = StyleSheet.create({
    imgContainer: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between'
    
    }
});
