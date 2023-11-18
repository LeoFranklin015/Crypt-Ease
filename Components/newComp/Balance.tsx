import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  RlyMumbaiNetwork,
  createAccount,
  getAccount,
} from '@rly-network/mobile-sdk';

const Balance = () => {
  const [balance, setBalance] = useState(0);
  const [balanceRLY, setBalanceRLY] = useState(0);

  const rlyNetwork = RlyMumbaiNetwork;
  rlyNetwork.setApiKey(
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjEwNX0.L1KWoup3nPc2GKlk47lKjekQon39pdKvslWSlQs1QjTP__p0chY8nFJXMiwf5wf7KHf7CL1IZ06iKhyY4qCS0A',
  );

  const get = async () => {
    try {
      const erc20TokenAddress = '0x76b8D57e5ac6afAc5D415a054453d1DD2c3C0094';
      const balance = await RlyMumbaiNetwork.getBalance();
      setBalanceRLY(balance);
    } catch (error) {
      console.error('Error getting:', error);
    }
  };

  const fetchData = async () => {
    try {
      const url =
        'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=rally';
      const headers = {
        'X-CMC_PRO_API_KEY': '90d40c4a-591c-4281-88f4-2fc7a2535651',
        Accept: 'application/json',
      };

      const response = await fetch(url, {headers});
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      // console.log('Data:', data); // Use this to check the response data in the console
      // Further process the received data here
      const price = data.data['8075'].quote.USD.price;
      console.log('Price:', price);
      setBalance((price * balanceRLY).toFixed(4));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    get();
    fetchData();
  });

  return (
    <View style={styles.container}>
      <View style={styles.myBalance}>
        <Text style={[styles.totalBalance, styles.text1FlexBox]}>
          Total Balance
        </Text>
        <View style={styles.balance}>
          <Text style={[styles.text1, styles.text1FlexBox]}>${balance}</Text>
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
