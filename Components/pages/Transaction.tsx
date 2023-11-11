import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  GestureResponderEvent,
} from 'react-native';

import {NavigationHelpers, ParamListBase} from '@react-navigation/native';

type Props = {
  navigation: NavigationHelpers<ParamListBase>;
};

const Transaction: React.FC<Props> = ({navigation}) => {
  const handleNavigation = (): void => {
    navigation.navigate('SecondPage');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Home{'\n'}(You are on FirstPage)
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleNavigation}>
            <Text>Go to setting Tab</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          React Native Tab Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});

export default Transaction;
