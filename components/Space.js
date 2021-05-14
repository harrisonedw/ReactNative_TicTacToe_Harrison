import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { sgameSize } from './gameLogic.js';


const Space = ({
  xPosition,
  yPosition,
  value,
  updateGame,
}) => {

  const borderYStyle = yPosition % 2 !== 0 ? styles.oddYBorder : null;
  const borderXStyle = xPosition % 2 !== 0 ? styles.oddXBorder : null;

  return (
    <TouchableOpacity style={[styles.spaceStyle, borderYStyle, borderXStyle]} onPress={() => {updateGame(xPosition, yPosition)}}>
      <Text style={styles.textStyle}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  spaceStyle: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  oddYBorder: {
    borderTopWidth: 10,
    borderBottomWidth: 10,
  },
  oddXBorder: {
    borderLeftWidth: 10,
    borderRightWidth: 10,
  },
  textStyle: {
    fontSize: 75,
  }
});

export default Space;