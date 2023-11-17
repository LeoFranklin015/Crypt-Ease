import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Dropdown from './Dropdown';

import {RlyMumbaiNetwork, getAccount} from '@rly-network/mobile-sdk';

interface LocalData {
  value: string;
  label: string;
}

interface balance {
  balance: any;
}
const local_data: LocalData[] = [
  {value: '1', label: 'ETH'},
  {value: '2', label: 'RLY'},
  {value: '3', label: 'MATIC'},
];

const Balance: React.FC<balance> = ({balance}) => {
  // const [balance, setBalance] = useState(1000);
  const [country, setCountry] = useState('ETH');
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string, label: string) => {
    setCountry(label);
    setOpen(false);
  };

  const renderItem = ({item}: {item: LocalData}) => {
    return (
      <TouchableOpacity
        style={[styles.item, country === item.label && styles.selected]}
        onPress={() => handleSelect(item.value, item.label)}>
        <Text style={styles.itemText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceSection}>
        <Text style={styles.balanceText}>Balance</Text>
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.selectedItem}
            onPress={() => setOpen(!open)}>
            <Text style={styles.selectedText}>{country}</Text>
          </TouchableOpacity>
          {open && (
            <View style={styles.dropdownList}>
              <FlatList
                data={local_data}
                renderItem={renderItem}
                keyExtractor={item => item.value}
              />
            </View>
          )}
        </View>
      </View>
      <Text style={styles.largeBalance}>
        {balance} {country}
      </Text>
      <Text style={styles.smallBalance}>{balance} in usd</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 400, // Set a specific width
    // height: 120, // Set a specific height
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B8A6FF', // Dark background color
    color: 'white', // Text color
    margin: 10,
    // marginTop: -30,
  },
  balanceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: 20,
    marginLeft: 50,
  },
  balanceText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black', // Text color
    marginRight: 33,
  },

  largeBalance: {
    marginTop: 20,
    fontSize: 40, // Adjust the font size
    fontWeight: 'bold', // Add bold font weight
    color: 'white', // Text color
  },
  smallBalance: {
    marginTop: 20,
    fontSize: 15, // Adjust the font size
    // fontWeight: 'light', // Add bold font weight
    color: 'black', // Text color
  },
  dropdown: {
    margin: 16,
    width: 120,
    marginLeft: 100,
  },
  selectedItem: {
    height: 40,
    backgroundColor: '#6A5ACD',
    borderRadius: 22,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    color: 'white',
    alignSelf: 'center',
  },
  dropdownList: {
    backgroundColor: '#B8A6FF',
    marginTop: 5,
    borderRadius: 8,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selected: {
    backgroundColor: '#9B88D4',
  },
  itemText: {
    color: 'black',
  },
});

export default Balance;
