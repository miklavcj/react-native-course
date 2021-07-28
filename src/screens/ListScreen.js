import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{ name: 'Friend 1', age: 31 },
		{ name: 'Friend 2', age: 25 },
		{ name: 'Friend 3', age: 45 },
		{ name: 'Friend 4', age: 7 },
		{ name: 'Friend 5', age: 12 },
		{ name: 'Friend 6', age: 56 },
		{ name: 'Friend 7', age: 14 },
		{ name: 'Friend 8', age: 62 },
		{ name: 'Friend 9', age: 31 },
	];

	return (
		<FlatList
			keyExtractor={friend => friend.name}
			data={friends}
			renderItem={({ item }) => {
				return (
					<View style={styles.margin}>
						<Text style={styles.textMain}>{item.name}</Text>
						<Text style={styles.textSecondary}>Age: {item.age}</Text>
					</View>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	margin: {
		marginVertical: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textMain: {
		fontSize: 40,
	},
	textSecondary: {
		fontSize: 20,
	},
});

export default ListScreen;
