import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  RlyMumbaiNetwork,
  createAccount,
  getAccount,
} from '@rly-network/mobile-sdk';

interface AssetCardProps {
  currency: string;
}
const AssetCard: React.FC<AssetCardProps> = ({currency}) => {
  const [balance, setBalance] = useState(0);

  let tokenAddress = '';
  let name = '';
  if (currency == 'RLY') {
    name = 'Rally';
    tokenAddress = '0x1C7312Cb60b40cF586e796FEdD60Cf243286c9E9';
  } else if (currency == 'MATIC') {
    name = 'Matic';
    tokenAddress = '0x0000000000000000000000000000000000001010';
  }
  const getBalance = async () => {
    try {
      const balance = await RlyMumbaiNetwork.getBalance(
        // '0x1C7312Cb60b40cF586e796FEdD60Cf243286c9E9',

        // '0x0000000000000000000000000000000000001010',
        tokenAddress,
      );

      console.log(balance);
      setBalance(balance);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBalance();
  });
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Image
          style={styles.logo}
          source={require('./blockchain.png')} // Replace with your actual logo URL
        />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.balance}>
        {balance} {currency}
      </Text>
      {/* <View style={styles.line} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', // Occupy the full width
    padding: 10,
    // borderWidth: 1,
    // borderColor: '#ccc',
    borderRadius: 8,
    // backgroundColor: '#D8D8FA',
  },
  logo: {
    width: 50, // Adjust the logo width
    height: 50, // Adjust the logo height
    marginRight: 10,
    backgroundColor: 'black',
    borderRadius: 50,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10, // Adjust the margin as needed
  },
  balance: {
    fontSize: 14,
  },
  line: {
    borderBottomWidth: 1, // Width of the horizontal line
    borderBottomColor: '#ccc', // Color of the horizontal line
    width: '100%', // Occupy the full width
    marginTop: 10, // Adjust the spacing between the card and the line
  },
});

export default AssetCard;
