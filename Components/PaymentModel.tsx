import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface PaymentModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSend: (amount: number) => void;
  address: String;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isVisible,
  onClose,
  onSend,
  address,
}) => {
  const [amount, setAmount] = useState('');

  const handleSend = () => {
    const amountValue = parseFloat(amount);

    if (!isNaN(amountValue)) {
      onSend(amountValue);
      onClose();
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
            placeholderTextColor="#bbb" // Light gray placeholder text
            value={amount}
            onChangeText={text => setAmount(text)}
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

export default PaymentModal;
