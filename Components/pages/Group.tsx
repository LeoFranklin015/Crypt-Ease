import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Balance from '../newComp/Balance';
import Buttons from '../newComp/Buttons';
import TabNavigation from '../TabNavigation';

const Group: React.FC = () => {
  const navigation = useNavigation();
  const handleQr = () => {
    navigation.navigate('Qr'); // Navigate to 'OtherScreen' on image click
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.leftContainer}>
          {/* Profile Picture */}
          <Image
            source={require('../blockchain.png')}
            style={styles.profilePic}
          />
        </View>
        {/* App Name */}
        <Text style={styles.appName}>CryptEase</Text>
        <View style={styles.rightContainer}>
          {/* Scan Icon */}
          <TouchableOpacity onPress={handleQr}>
            <Image
              source={require('../../assets/Icon_Scan.png')}
              style={styles.scanIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.sectionContainer}>
          <Balance />
          <Buttons />
        </View>
      </View>
      <TabNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F5F6',
    gap: 30,
  },
  contentContainer: {
    flex: 1,
    marginBottom: -140,
  },
  sectionContainer: {
    flex: 1,
    gap: -70,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F5F6',
    paddingHorizontal: 20,
    height: 60,
    // Add any additional styling for the navbar
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20, // To make it round assuming the profile picture is square
    marginRight: 10,
    backgroundColor: 'black',
    // Add any additional styling for the profile picture
  },
  scanIcon: {
    width: 30,
    height: 30,
    // backgroundColor: 'black',

    // Add any additional styling for the scan icon
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default Group;
