import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {RlyMumbaiNetwork, MetaTxMethod} from '@rly-network/mobile-sdk';
import Auth from './pages/Auth';
import {useNavigation} from '@react-navigation/native';

interface PaymentModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSend: (amount: number) => void;
  address: String;
}

const customTokenAddress: string | undefined = undefined;

const PaymentModal: React.FC<PaymentModalProps> = ({
  isVisible,
  onClose,
  onSend,
  address,
}) => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('ETH');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const transfer = async () => {
    try {
      setLoading(true);
      const val = await Auth();
      if (val == 1) {
        const amountValue = parseFloat(amount);
        if (!isNaN(amountValue)) {
          await RlyMumbaiNetwork.transfer(
            String(address),
            parseInt(amount, 10),
            '0x1C7312Cb60b40cF586e796FEdD60Cf243286c9E9',
            MetaTxMethod.ExecuteMetaTransaction,
          );
          Alert.alert('Transfer Successful !');
          onClose();
          navigation.navigate('Home');
        } else {
          Alert.alert('Amount cant be empty');
        }
      }
    } catch (error) {
      Alert.alert('An error occurred.');
      console.log(error);
    } finally {
      setLoading(false); // Stop loading, whether successful or not
    }
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>The address you scanned is {address}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter amount"
            keyboardType="numeric"
            placeholderTextColor="#bbb"
            value={amount}
            onChangeText={text => setAmount(text)}
            editable={!loading} // Disable input field while loading
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={transfer}
            disabled={loading} // Disable the button while loading
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>
                {loading ? 'PleaseWait' : 'Send'}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay
  },
  modalContent: {
    backgroundColor: '#333', // Dark background color
    borderRadius: 15,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    color: '#fff', // White text color
    fontSize: 22,
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#555', // Dark border color
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    color: '#fff', // White text color
  },
  sendButton: {
    backgroundColor: '#1e90ff', // Dark blue button color
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  },
  closeButton: {
    backgroundColor: '#ff4500', // Dark red button color
    padding: 15,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    color: '#fff', // White text color
    textAlign: 'center',
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30,
    backgroundColor: '#333', // Dark background color
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30,
    backgroundColor: '#333', // Dark background color
  },
});

export default PaymentModal;
