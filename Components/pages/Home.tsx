import React, {useEffect, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';

import Navbar from '../Navbar';
import SendModal from '../SendModal';
import {
  RlyMumbaiNetwork,
  createAccount,
  getAccount,
} from '@rly-network/mobile-sdk';

import Balance from '../Balance';
import TabNavigation from '../TabNavigation';
import WalletSend from '../WalletSend';

const rlyNetwork = RlyMumbaiNetwork;
rlyNetwork.setApiKey(
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjEwNX0.L1KWoup3nPc2GKlk47lKjekQon39pdKvslWSlQs1QjTP__p0chY8nFJXMiwf5wf7KHf7CL1IZ06iKhyY4qCS0A',
);

const Home: React.FC = () => {
  const navigation = useNavigation();

  const profilePic: ImageSourcePropType = {
    uri: 'https://placekitten.com/200/200',
  };
  const username: string = '6321xxxx9055';
  const appName: string = 'CryptEase';

  const [isSendModalVisible, setSendModalVisible] = useState(false);
  const [isWalletModalVisible, setWalletModalVisible] = useState(false);
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState('0X');

  const openSendModal = () => {
    setSendModalVisible(true);
  };

  const closeSendModal = () => {
    setSendModalVisible(false);
  };

  const closeWalletModal = () => {
    setWalletModalVisible(false);
  };

  const handleSendViaQR = () => {
    closeSendModal();
    navigation.navigate('Qr');
  };

  const handleSendViaWalletAddress = () => {
    closeSendModal();
    setWalletModalVisible(true);
    console.log('send');
  };

  const onRecieve = () => {
    navigation.navigate('Recieve');
  };

  const get = async () => {
    try {
      const erc20TokenAddress = '0x76b8D57e5ac6afAc5D415a054453d1DD2c3C0094';
      const balance = await RlyMumbaiNetwork.getBalance();
      setBalance(balance);
    } catch (error) {
      console.error('Error getting:', error);
    }
  };

  useEffect(() => {
    get();
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Navbar profilePic={profilePic} username={account} appName={appName} />
        {/* <Text style={{color: 'white'}}>HEllo</Text> */}
        <Balance balance={balance} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={openSendModal}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onRecieve}>
            <Text style={styles.buttonText}>Receive</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spaceBetweenComponents} />
        <TabNavigation />
        <SendModal
          isVisible={isSendModalVisible}
          onSendViaQR={handleSendViaQR}
          onSendViaWalletAddress={handleSendViaWalletAddress}
          onClose={closeSendModal}
        />
        <WalletSend
          isVisible={isWalletModalVisible}
          onClose={closeWalletModal}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D8D8FA',
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

export default Home;

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
