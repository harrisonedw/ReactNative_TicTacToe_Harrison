import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

const Space = ({
  xPosition,
  yPosition,
  value,
  updateGame,
}) => {

 
  return (
    <TouchableOpacity style={styles.spaceStyle} onPress={() => {updateGame(xPosition, yPosition)}}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  spaceStyle: {
    width: 50,
    height: 50,
    borderWidth: 5,
  }
});

export default Space;