import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import SendModal from '../SendModal';
import WalletSend from '../WalletSend';

const Buttons = () => {
  const [isSendModalVisible, setSendModalVisible] = useState(false);
  const [isWalletModalVisible, setWalletModalVisible] = useState(false);

  const openSendModal = () => {
    setSendModalVisible(true);
  };

  const closeSendModal = () => {
    setSendModalVisible(false);
  };

  const closeWalletModal = () => {
    setWalletModalVisible(false);
  };
  const navigation = useNavigation();

  const handleSendViaQR = () => {
    closeSendModal();
    navigation.navigate('Qr');
  };
  const handleRecieve = () => {
    navigation.navigate('Recieve');
  };

  const handleSendViaWalletAddress = () => {
    closeSendModal();
    setWalletModalVisible(true);
    console.log('send');
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={openSendModal}>
          <View style={styles.send}>
            <View style={styles.buttonSend}>
              <Image
                style={styles.iconSend1}
                resizeMode="cover"
                source={require('../../assets/Icon_Send.png')}
              />
            </View>
            <Text style={styles.sendText}>Send</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.swapSpaceBlock} />
        <TouchableOpacity onPress={handleRecieve}>
          <View style={styles.swapSpaceBlock}>
            <View style={styles.buttonSend}>
              <Image
                style={styles.iconSend1}
                resizeMode="cover"
                source={require('../../assets/Icon_Send.png')}
              />
            </View>

            <Text style={styles.sendText}>Receive</Text>
          </View>
        </TouchableOpacity>
      </View>
      <SendModal
        isVisible={isSendModalVisible}
        onSendViaQR={handleSendViaQR}
        onSendViaWalletAddress={handleSendViaWalletAddress}
        onClose={closeSendModal}
      />
      <WalletSend isVisible={isWalletModalVisible} onClose={closeWalletModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    // marginTop: 1,
    // backgroundColor: 'black',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 20,
  },
  send: {
    alignItems: 'center',
  },
  buttonSend: {
    borderRadius: 16,
    backgroundColor: '#272729',
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconSend1: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
  sendText: {
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: '#272729',
    textAlign: 'center',
    marginTop: 4,
  },
  swapSpaceBlock: {
    marginLeft: 34,
    alignItems: 'center',
  },
});

export default Buttons;
