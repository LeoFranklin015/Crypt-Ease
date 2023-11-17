import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Balance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.myBalance}>
        <Text style={[styles.totalBalance, styles.text1FlexBox]}>
          Total Balance
        </Text>
        <View style={styles.balance}>
          <Text style={[styles.text1, styles.text1FlexBox]}>$2,663.56</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Aligns the inner content to the center
    justifyContent: 'center', // Centers the inner content vertically
    // Add additional styles for outer container as needed
    // backgroundColor: 'red',
  },
  text1FlexBox: {
    textAlign: 'center',
    letterSpacing: 0,
  },
  totalBalance: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: '#8c8d99',
  },
  text1: {
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
    color: '#272729',
  },
  balance: {
    marginTop: 8,
  },
  myBalance: {
    alignItems: 'center', // Aligns the inner content to the center
    // Remove flex and width properties to allow the container to adjust to content size
    // flex: 1,
    // width: '100%',
    // backgroundColor: 'blue',
  },
});

export default Balance;
