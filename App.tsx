// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {
//   RlyMumbaiNetwork,
//   createAccount,
//   getAccount,
//   Network,
// } from '@rly-network/mobile-sdk';

// const rlyNetwork: Network = RlyMumbaiNetwork;

// // add your API Key
// rlyNetwork.setApiKey(
//   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjEwNX0.L1KWoup3nPc2GKlk47lKjekQon39pdKvslWSlQs1QjTP__p0chY8nFJXMiwf5wf7KHf7CL1IZ06iKhyY4qCS0A',
// );

// function App(): JSX.Element {
//   const executeClaim = async () => {
//     try {
//       await RlyMumbaiNetwork.claimRly();
//       console.log('Claim successful');
//     } catch (error) {
//       console.error('Error claiming RLY:', error);
//     }
//   };
//   const create = async () => {
//     try {
//       const newAccount = await createAccount();

//       console.log('Created successful');
//     } catch (error) {
//       console.error('Error Creating :', error);
//     }
//   };
//   const get = async () => {
//     try {
//       const account = await getAccount();

//       console.log('ACCOUNT :', account);
//     } catch (error) {
//       console.error('Error getting :', error);
//     }
//   };

//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         {/* <Header /> */}
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Text>Hello World</Text>
//           <Button title="Create" onPress={create}></Button>
//           <Button title="Get" onPress={get}></Button>
//           <Button title="Claim" onPress={executeClaim}></Button>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  RlyMumbaiNetwork,
  createAccount,
  getAccount,
} from '@rly-network/mobile-sdk';

const rlyNetwork = RlyMumbaiNetwork;
rlyNetwork.setApiKey('YOUR_API_KEY_HERE');

const App: React.FC = () => {
  const executeClaim = async () => {
    try {
      await RlyMumbaiNetwork.claimRly();
      console.log('Claim successful');
    } catch (error) {
      console.error('Error claiming RLY:', error);
    }
  };

  const create = async () => {
    try {
      const newAccount = await createAccount();
      console.log('Created successful');
    } catch (error) {
      console.error('Error Creating:', error);
    }
  };

  const get = async () => {
    try {
      const account = await getAccount();
      console.log('ACCOUNT:', account);
    } catch (error) {
      console.error('Error getting:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.mainContent}>
          <Text style={styles.heading}>Hello World</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={create}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={get}>
              <Text style={styles.buttonText}>Get</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={executeClaim}>
              <Text style={styles.buttonText}>Claim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    marginVertical: 10,
    width: '80%',
    backgroundColor: 'blue', // Change color as needed
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
