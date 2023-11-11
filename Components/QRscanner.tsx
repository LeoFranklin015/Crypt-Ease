import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Modal,
  View,
  TextInput,
} from 'react-native';

import PaymentModal from './PaymentModel';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera, RNCameraProps} from 'react-native-camera';

interface ScanScreenProps {}

class QRScanner extends Component<ScanScreenProps> {
  state = {
    isPaymentModalVisible: false,
    first: 'null',
  };
  onSuccess = (e: any) => {
    this.setState({first: e.data, isPaymentModalVisible: true});
  };

  handlePayment = (amount: number) => {
    // Implement your logic to handle the payment with the entered amount
    console.log('Payment amount:', amount);
    // Close the payment modal
    this.setState({isPaymentModalVisible: false});
  };

  render() {
    return (
      <View style={styles.container}>
        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          topContent={
            <Text style={styles.centerText}>
              <Text style={styles.textBold}>
                Scan the QR code of the Reciever
              </Text>
            </Text>
          }
          cameraStyle={styles.cameraContainer} // Style for the camera container
        />
        {this.state.isPaymentModalVisible && (
          <PaymentModal
            isVisible={this.state.isPaymentModalVisible}
            onClose={() => this.setState({isPaymentModalVisible: false})}
            onSend={this.handlePayment}
            address={this.state.first}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 16, // Top spacing
    paddingBottom: 16, // Bottom spacing
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: 'white',
    textAlign: 'center',
  },
  textBold: {
    fontWeight: '500',
    color: 'white',
  },
  buttonText: {
    fontSize: 21,
    color: 'white',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QRScanner;
