import React from 'react';
import {appUpgradeVersionCheck} from 'app-upgrade-react-native-sdk';
import {SafeAreaView} from 'react-native';
import HomeScreenView from './src/screens/HomeScreen/HomeScreen.view';

function App(): JSX.Element {
  const xApiKey = 'NmYxODE2OTItMjRlYi00ZDQ5LWIxNjEtNzlmYjQ4YTUxZmI5'; // Your project key
  const appInfo = {
    appId: 'id428927940', // Your app url in play store or app store
    appName: 'Demo', // Your app name
    appVersion: '0.1.0', // Your app version, you can get it using react-native-device-info
    platform: 'ios', // App Platform, android or ios
    environment: 'dev', // App Environment, production, development
    appLanguage: 'en', //Your app language ex: en, es etc. Optional.
  };

  // Alert config is optional
  const alertConfig = {
    title: 'Please Update',
    updateButtonTitle: 'Update Now',
    laterButtonTitle: 'Later',
    onDismissCallback: () => {
      console.log('Dismiss');
    },
    onLaterCallback: () => {
      console.log('Later');
    },
  };

  appUpgradeVersionCheck(appInfo, xApiKey, alertConfig);

  return (
    <SafeAreaView>
      <HomeScreenView />
    </SafeAreaView>
  );
}

export default App;
