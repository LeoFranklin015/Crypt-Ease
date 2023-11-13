import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Alert,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import QRCode from 'react-native-qrcode-svg';

import {RlyMumbaiNetwork, getAccount} from '@rly-network/mobile-sdk';

const rlyNetwork = RlyMumbaiNetwork;
rlyNetwork.setApiKey(
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjEwNX0.L1KWoup3nPc2GKlk47lKjekQon39pdKvslWSlQs1QjTP__p0chY8nFJXMiwf5wf7KHf7CL1IZ06iKhyY4qCS0A',
);

const GenerateQR: React.FC = () => {
  const navigation = useNavigation();

  const getacc = async () => {
    try {
      const account = await getAccount();
      if (account !== undefined) {
        console.log('ACCOUNT:', account);
        setQRcode(account);
      }
    } catch (error) {
      console.error('Error getting:', error);
    }
  };
  const [QRcode, setQRcode] = useState('default');

  useEffect(() => {
    getacc();
  }, []);
  const qrCodeRef = useRef<ViewShot>(null);

  const handleDownloadQRCode = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Permission denied');
          return;
        }

        const currentRef = qrCodeRef.current;

        if (currentRef && typeof currentRef.capture === 'function') {
          await currentRef.capture().then(async uri => {
            if (uri) {
              const path = RNFS.PicturesDirectoryPath + '/' + 'QRcode.png';
              await RNFS.moveFile(uri, path);
              await RNFS.scanFile(path);
              Alert.alert('QR code has been downloaded');
            } else {
              console.error('Failed to capture QR code');
            }
          });
        } else {
          console.error(
            'qrCodeRef.current is undefined or does not have a capture method',
          );
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancel = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
        Scan this to send{' '}
      </Text>
      <ViewShot style={styles.card} options={{format: 'png', quality: 1.0}}>
        <QRCode value={QRcode} size={250} />
        <Text style={styles.qrText}>{QRcode}</Text>
      </ViewShot>
      <TouchableOpacity style={styles.button} onPress={handleDownloadQRCode}>
        <Text style={styles.buttonText}>Download QR Code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    gap: 30,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  qrText: {
    marginTop: 10,
    color: 'black', // Change the color based on your preference
  },
  button: {
    marginTop: 20,
    backgroundColor: '#6A5ACD', // Dark blue button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: '#ff4500', // Dark red button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});

export default GenerateQR;
