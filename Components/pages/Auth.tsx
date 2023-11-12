// Auth.ts
import ReactNativeBiometrics from 'react-native-biometrics';
import {Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

const Auth = async () => {
  try {
    const biometrics = new ReactNativeBiometrics({
      allowDeviceCredentials: true,
    });
    const {success} = await biometrics.simplePrompt({
      promptMessage: 'Confirmation',
    });

    if (success) {
      console.log('Auth success');
      return 1;
    }
  } catch (error) {
    Alert.alert(String(error));
  }
};

export default Auth;
