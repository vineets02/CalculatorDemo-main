import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Error = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Errors</Text>
      <Text style={styles.heading}>{route.params.value}</Text>
    </View>
  );
};

export default Error;

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
