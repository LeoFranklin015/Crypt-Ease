import React, {useEffect} from 'react';
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
import supabase from '../../lib/api';

const Transaction: React.FC = () => {
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const {data, error} = await supabase
          .from('Transaction')
          .select('*')
          .limit(10);

        if (error) {
          console.error('Error fetching transactions:', error);
        } else {
          console.log('Fetched data:', data);
        }
      } catch (error: any) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 10, backgroundColor: '#FFFFFF', gap: 10}}>
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
