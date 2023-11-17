import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {RlyMumbaiNetwork, MetaTxMethod} from '@rly-network/mobile-sdk';
import Auth from './pages/Auth';
import {useNavigation} from '@react-navigation/native';

interface WalletSendProps {
  isVisible: boolean;
  onClose: () => void;
}

const WalletSend: React.FC<WalletSendProps> = ({isVisible, onClose}) => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const handleSend = async () => {
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
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Send Money</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Address"
            value={address}
            onChangeText={setAddress}
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholderTextColor="black"
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSend}
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
    backgroundColor: '#F3F5F6', // Dark background color
    borderRadius: 15,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    color: 'black', // White text color
    fontSize: 22,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f4f4f4', // Light gray background color
    color: 'black', // Text color
    width: '100%',
  },
  sendButton: {
    backgroundColor: '#4CAF50', // Dark blue button color
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

export default WalletSend;
