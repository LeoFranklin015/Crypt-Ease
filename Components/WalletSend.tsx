import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface WalletSendProps {
  isVisible: boolean;
  onClose: () => void;
}

const WalletSend: React.FC<WalletSendProps> = ({isVisible, onClose}) => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = () => {
    // Add validation or other logic before sending
    // Call the onSend callback with the address and amount

    // Close the modal
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
            placeholderTextColor="white" // Set text color to white
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholderTextColor="white" // Set text color to white
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.buttonText}>Send</Text>
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
    backgroundColor: 'darkgreen', // Dark blue button color
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
