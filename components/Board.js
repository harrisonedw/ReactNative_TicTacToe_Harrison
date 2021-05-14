import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const Board = ({ children }) => {
 
  return (
    <View>
        {children}
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Board;