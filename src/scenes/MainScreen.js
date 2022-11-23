import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('0');
  const handlePress = val => {
    console.log('pressed', val);
    if (val == 'AC') {
      setValue('0');
    } else if (val == '=') {
      try {
        if (
          (value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length
        ) {
          if (
            value.slice(-1) == '+' ||
            value.slice(-1) == '-' ||
            value.slice(-1) == '.'
          ) {
            setValue(`${eval(value.replace('()', '(0)'))}`);
          } else {
            setValue(`${eval(value)}`);
          }
        } else {
          console.log('unequal bracket');
        }

        navigation.navigate('Result', {value: value});
      } catch (e) {
        navigation.navigate('Error', {value: 'format error'});
      }
    } else if (val == 'c') {
      setValue(value.slice(0, -1));
    } else {
      if (value == '0') {
        if (val == '+' || val == '-') {
          setValue(value + val);
        } else {
          setValue(val);
        }
      } else if (isNaN(val)) {
        if (
          value.slice(-1) == '+' ||
          value.slice(-1) == '-' ||
          value.slice(-1) == '.'
        ) {
          setValue(value.slice(0, -1) + val);
        } else {
          setValue(value + val);
        }
      } else {
        setValue(value + val);
      }
    }
  };
  return (
    <View>
      <View style={styles.mainscreen}>
        <ScrollView style={styles.mainScreenDisplay}>
          <Text style={styles.displaytext}>{value}</Text>
        </ScrollView>
        <View style={styles.keypad}>
          <View style={styles.keypadrow}>
            <Pressable onPress={() => handlePress('7')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>7</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress('8')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>8</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress('9')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>9</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress('AC')}>
              <View style={styles.btn2_outer}>
                <Text style={styles.bg2_button}>AC</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.keypadrow}>
            <Pressable onPress={() => handlePress('4')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>4</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress('5')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>5</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress('6')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>6</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress('+')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>+</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.keypadrow}>
            <Pressable onPress={() => handlePress('1')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>1</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress('2')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>2</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress('3')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>3</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress('-')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>-</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.keypadrow}>
            <Pressable onPress={() => handlePress('c')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>c</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress('0')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>0</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress('.')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>.</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handlePress('=')}>
              <View style={styles.btn_outer}>
                <Text style={styles.bg1_button}>=</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainscreen: {
    marginTop: hp(2),
    display: 'flex',

    backgroundColor: 'white',
    alignItems: 'center',
    width: wp(100),
    height: hp(50),
  },
  mainScreenDisplay: {
    elevation: 5,
    width: wp(100),
    backgroundColor: '#fff',
    borderRadius: 10,
    display: 'flex',
    marginBottom: 10,
    padding: 10,
  },
  displaytext: {
    fontSize: 50,
    textAlign: 'right',
  },
  keypad: {
    width: wp(100),
    height: '20%',
    display: 'flex',
  },
  keypadrow: {
    display: 'flex',
    flexDirection: 'row',

    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  btn_outer: {
    width: 80,
    height: 80,
    elevation: 4,
    backgroundColor: '#fff',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  bg1_button: {
    color: '#000',
    fontSize: 30,
    borderRadius: 60,
  },
  bg2_button: {
    color: '#000',
    fontSize: 30,
    borderRadius: 50,
  },
  btn2_outer: {
    width: 80,
    height: 80,
    elevation: 4,
    backgroundColor: '#d2e1e5',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
