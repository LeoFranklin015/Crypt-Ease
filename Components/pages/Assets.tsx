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
      <View style={{flex: 1, padding: 10, backgroundColor: '#FFFFFF', gap: 10}}>
        <AssetCard currency="RLY" />
        <View style={styles.line} />
        <AssetCard currency="MATIC" />
        <View style={styles.line} />
        <AssetCard currency="RLY" />
        <View style={styles.line} />
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
  line: {
    borderStyle: 'solid',
    borderColor: 'rgba(147, 149, 164, 0.1)',
    borderTopWidth: 1,
    // flex: 1,
    width: '100%',
    // height: 1,
  },
});

export default Assets;
