import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Fetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const url =
        'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=rally';
      const headers = {
        'X-CMC_PRO_API_KEY': '90d40c4a-591c-4281-88f4-2fc7a2535651',
        Accept: 'application/json',
      };

      const response = await fetch(url, {headers});
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      console.log('Data:', data); // Use this to check the response data in the console
      // Further process the received data here
      const price = data.data['8075'].quote.USD.price;
      console.log('Price:', price);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const checkConnectivity = async () => {
    try {
      const response = await fetch('https://www.google.com');
      if (response.ok) {
        console.log('Connected!');
        // If you want to see the response data, you can log it here
        // const data = await response.json();
        // console.log('Response data:', data);
      } else {
        console.log('Connection failed with status:', response.status);
      }
    } catch (error: any) {
      console.error('Error connecting:', error.message);
    }
  };

  // Call the function to check connectivity

  useEffect(() => {
    fetchData();
    // checkConnectivity();
  }, []);

  return (
    <View style={styles.container}>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <Text style={styles.text}>
          {data ? JSON.stringify(data, null, 2) : 'Loading...'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Arial',
  },
});

export default Fetch;
