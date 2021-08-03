import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const reducer = (state, action) => {
	// state === {red: number, green:number, blue:nuber}
	//acton === {colorToChange: 'red'||'green'|'blue', amout: 15 || -15}

	switch (action.colorToChange) {
		case 'red':
			return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : { ...state, red: state.red + action.amount };
		case 'green':
			return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : { ...state, green: state.green + action.amount };

		case 'blue':
			return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : { ...state, blue: state.blue + action.amount };

		default:
			return;
	}
};

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
	const { red, green, blue } = state;

	const COLOR_STEP = 10;

	return (
		<View>
			<ColorCounter
				color='Red'
				onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_STEP })}
				onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_STEP })}
			/>
			<ColorCounter
				color='Green'
				onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_STEP })}
				onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_STEP })}
			/>
			<ColorCounter
				color='Blue'
				onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_STEP })}
				onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_STEP })}
			/>
			<View style={{ width: 100, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
		</View>
	);
};

export default SquareScreen;

const styles = StyleSheet.create({});
