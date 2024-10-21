import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import QRCodeScreen from './src/screens/qr-code/QRCode';
import QRCodeStyledScreen from './src/screens/qr-code-styled/QRCodeStyled';
import ScanCode from './src/screens/scan-code/ScanCode';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: Colors.darker,
          },
        }}>
        <Stack.Screen
          name="QRCode"
          component={QRCodeScreen}
          options={{title: 'QR Code'}}
        />
        <Stack.Screen
          name="QRCodeStyled"
          component={QRCodeStyledScreen}
          options={{title: 'QR Code With Styles'}}
        />
        <Stack.Screen
          name="ScanCode"
          component={ScanCode}
          options={{title: 'Scan Code'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
