import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Result = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calculated Result</Text>
      <Text style={styles.heading}>{route.params.value}</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
  },
});
