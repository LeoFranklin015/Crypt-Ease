import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Alert, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import {
  RlyMumbaiNetwork,
  getAccount,
  createAccount,
} from '@rly-network/mobile-sdk';

const rlyNetwork = RlyMumbaiNetwork;
rlyNetwork.setApiKey(
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjEwNX0.L1KWoup3nPc2GKlk47lKjekQon39pdKvslWSlQs1QjTP__p0chY8nFJXMiwf5wf7KHf7CL1IZ06iKhyY4qCS0A',
);

const checkIfAccountExists = async () => {
  const account = await getAccount();
  if (account !== undefined) {
    console.log('ACCOUNT:', account);
    return true;
  } else {
    return false;
  }
};

const Splash = () => {
  const navigation = useNavigation();
  const [isAccountExists, setAccountExists] = useState(false);

  useEffect(() => {
    const checkAccount = async () => {
      const accountExists = await checkIfAccountExists();
      setAccountExists(accountExists);

      if (!accountExists) {
        // If the account doesn't exist, show the modal
        handleCreateAccount();
      } else {
        // If the account exists, navigate to the home screen after a delay (simulating a splash screen)
        setTimeout(() => {
          navigation.navigate('Home'); // Replace 'Home' with your actual home screen route name
        }, 4000); // Change the delay as needed
      }
    };

    checkAccount();
  }, [navigation]);

  const handleCreateAccount = async () => {
    try {
      const newAccount = await createAccount();
      Alert.alert(
        'Welcome User!',
        String('We have a created a crypto account for you...'),
      );
    } catch (error) {
      console.error('Error Creating:', error);
      Alert.alert('Error', String(error));
      //   navigation.navigate('Splash');
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: '#B8A6FF'}]}>
      <Animatable.Text
        style={styles.title}
        duration={3000}
        animation="fadeInRightBig">
        CryptEase
      </Animatable.Text>

      <Image
        style={styles.logo}
        source={require('../blockchain.png')}
        // Replace 'require('./path-to-your-logo.png')' with the actual path to your logo
      />

      <Animatable.Text
        style={styles.tagline}
        duration={3000}
        animation="fadeInLeft">
        Simplify crypto management effortlessly with CryptEase – no complexity,
        just simplicity.
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    color: 'white',
    fontSize: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default Splash;
