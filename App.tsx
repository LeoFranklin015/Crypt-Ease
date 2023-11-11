import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Alert,
} from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';
// import {RNCamera} from 'react-native-camera';
import QRscanner from './Components/QRscanner';

import Navbar from './Components/Navbar';

import {
  RlyMumbaiNetwork,
  createAccount,
  getAccount,
} from '@rly-network/mobile-sdk';
import Balance from './Components/Balance';
import TabNavigation from './Components/TabNavigation';
import GenerateQR from './Components/GenerateQR';

const rlyNetwork = RlyMumbaiNetwork;
rlyNetwork.setApiKey(
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjEwNX0.L1KWoup3nPc2GKlk47lKjekQon39pdKvslWSlQs1QjTP__p0chY8nFJXMiwf5wf7KHf7CL1IZ06iKhyY4qCS0A',
);

const App: React.FC = () => {
  const profilePic: ImageSourcePropType = {
    uri: 'https://placekitten.com/200/200',
  };
  const username: string = '6321xxxx9055';
  const appName: string = 'CryptEase';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Navbar profilePic={profilePic} username={username} appName={appName} />
        {/* <Text style={{color: 'white'}}>HEllo</Text> */}
        <Balance />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Receive</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spaceBetweenComponents} />
        <TabNavigation />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    marginTop: -170,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  spaceBetweenComponents: {
    height: 30, // Adjust the height as needed for the space between components
  },

  button: {
    backgroundColor: '#50C878',
    padding: 15,
    borderRadius: 8,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;

{
  /* 
  
  
    const executeClaim = async () => {
    try {
      await RlyMumbaiNetwork.claimRly();
      console.log('Claim successful');
    } catch (error) {
      console.error('Error claiming RLY:', error);
    }
  };

  const create = async () => {
    try {
      const newAccount = await createAccount();
      console.log('Created successful');
    } catch (error) {
      console.error('Error Creating:', error);
    }
  };

  const get = async () => {
    try {
      const account = await getAccount();
      console.log('ACCOUNT:', account);
    } catch (error) {
      console.error('Error getting:', error);
    }
  };




  
  <View style={styles.mainContent}>
          <Text style={styles.heading}>Hello World</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={create}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={get}>
              <Text style={styles.buttonText}>Get</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={executeClaim}>
              <Text style={styles.buttonText}>Claim</Text>
            </TouchableOpacity>
          </View>
        </View> */
}
