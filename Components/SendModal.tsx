import React from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';

interface SendOptionsModalProps {
  isVisible: boolean;
  onSendViaQR: () => void;
  onSendViaWalletAddress: () => void;
  onClose: () => void;
}

const SendModal: React.FC<SendOptionsModalProps> = ({
  isVisible,
  onSendViaQR,
  onSendViaWalletAddress,
  onClose,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Choose Sending Method</Text>
          <TouchableOpacity style={styles.optionButton} onPress={onSendViaQR}>
            <Text style={styles.optionButtonText}>Send via QR Code</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={onSendViaWalletAddress}>
            <Text style={styles.optionButtonText}>Send via Wallet Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cancel</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'black', // Background color changed to black
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white', // Text color changed to white
  },
  optionButton: {
    padding: 12,
    backgroundColor: '#6A5ACD',
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  optionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 12,
    backgroundColor: '#FF4500',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SendModal;
