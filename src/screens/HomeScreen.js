import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";



const HomeScreen = ({navigation}) => {
  return (
		<View style={styles.container}>
			<Text style={styles.text}>Home Screen</Text>

			<View style={styles.contButton}>
				<Button title='Navigate to Components Screen' onPress={() => navigation.navigate('Components')} />
				<Button title='Navigate To List Screen' onPress={() => navigation.navigate('List')} />
				<Button title='Navigate To Image Screen' onPress={() => navigation.navigate('Image')} />
				<Button title='Navigate To Counter Screen' onPress={() => navigation.navigate('Counter')} />
				<Button title='Navigate To Color Screen' onPress={() => navigation.navigate('Color')} />
				<Button title='Navigate To Square Screen' onPress={() => navigation.navigate('Square')} />
				<Button title='Navigate To Text Screen' onPress={() => navigation.navigate('Text')} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-evenly',
    alignItems: 'center'
	},
  contButton: {
height: '40%',
justifyContent: 'space-evenly',
  },
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
