import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const AssetCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Image
          style={styles.logo}
          source={require('./blockchain.png')} // Replace with your actual logo URL
        />
        <Text style={styles.name}>Currency Name</Text>
      </View>
      <Text style={styles.balance}>25 eth</Text>
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
