import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

    const COLOR_STEP = 10;

    const setColor = (color, change) => {

        switch(color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);                  
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);                  
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);                  
                return;
            default:
                return;
        }
    

    }

	return (
		<View>
			<ColorCounter
				onIncrease={() => {
					setColor('red', COLOR_STEP);
				}}
				onDecrease={() => {
					setColor('red', -1 * COLOR_STEP);
				}}
				color='Red'
			/>
			<ColorCounter
				color='Green'
				onIncrease={() => {
					setColor('green', COLOR_STEP);
				}}
				onDecrease={() => {
					setColor('green', -1* COLOR_STEP);
				}}
			/>
			<ColorCounter
				color='Blue'
				onIncrease={() => {
					setColor('blue', COLOR_STEP); 
				}}
				onDecrease={() => {
					setColor('blue', -1* COLOR_STEP);
				}}
			/>
            <View style={{ width: 100, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
		</View>
	);
};

export default SquareScreen;

const styles = StyleSheet.create({});
