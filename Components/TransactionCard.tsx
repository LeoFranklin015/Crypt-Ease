import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TransactionCardProps {
  accountNumber: string;
  amount: string;
  isSent: boolean;
}

const TransactionCard: FC<TransactionCardProps> = ({
  accountNumber,
  amount,
  isSent,
}) => {
  const Color = isSent ? '#FF6961' : '#4CAF50'; // Red for sent, Green for received

  return (
    // <View style={[styles.card, {backgroundColor: '#D8D8FA'}]}>
    <View style={styles.card}>
      <Text style={styles.accountNumber}>{accountNumber}</Text>
      <Text style={[styles.amount, {color: Color}]}>{amount}</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(147, 149, 164, 0.2)',

    borderRadius: 8,
    marginBottom: 10,
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Text color for account number
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    // Text color for amount
  },
});

export default TransactionCard;
