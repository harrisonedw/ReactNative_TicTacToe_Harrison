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

const Row = ({ children }) => {

  return (
    <View style={styles.rowStyles}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  rowStyles: {
    flexDirection: 'row',
  }
});

export default Row;