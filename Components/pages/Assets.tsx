import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

import AssetCard from '../AssetCard';

const Assets: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 10, backgroundColor: '#B8A6FF', gap: 10}}>
        <AssetCard />
        <AssetCard />
        <AssetCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#B8A6FF',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});

export default Assets;
