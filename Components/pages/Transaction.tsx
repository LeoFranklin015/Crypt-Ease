import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  GestureResponderEvent,
} from 'react-native';

import {NavigationHelpers, ParamListBase} from '@react-navigation/native';
import TransactionCard from '../TransactionCard';

const Transaction: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 10, backgroundColor: '#B8A6FF'}}>
        <TransactionCard
          accountNumber="536363643662624babwby55"
          amount="2 eth"
          isSent={true}
        />
        <TransactionCard
          accountNumber="fwqfXXXX532y"
          amount="3 rly"
          isSent={false}
        />
        <TransactionCard
          accountNumber="536363643662624babwby55"
          amount="24 eth"
          isSent={true}
        />
        <TransactionCard
          accountNumber="fwqfXXXX532y"
          amount="2 eth"
          isSent={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});

export default Transaction;
