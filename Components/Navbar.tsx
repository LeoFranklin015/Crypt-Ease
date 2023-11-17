import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';

interface CustomHeaderProps {
  profilePic: ImageSourcePropType; // Change the type to match the profile picture source
  username: string;
  appName: string;
}

const Navbar: React.FC<CustomHeaderProps> = ({
  profilePic,
  username,
  appName,
}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: '#D8D8FA', // Change the background color as needed
    }}>
    <Text style={{fontWeight: 'bold', color: 'black'}}>{appName}</Text>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={profilePic} // Replace with actual profile picture URL
        style={{width: 40, height: 40, borderRadius: 50}}
      />
      <Text style={{marginLeft: 10, fontWeight: 'bold', color: 'black'}}>
        {username}
      </Text>
    </View>
  </View>
);

export default Navbar;
