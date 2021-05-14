import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Board = ({ children }) => {
 
  return (
    <View>
      <Text>Board</Text>
        {children}
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Board;