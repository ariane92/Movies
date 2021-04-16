import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import Routes from './routes/index'
import { NavigationContainer } from '@react-navigation/native'

const App: React.FC = () => {
  return (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#472a5f" />
        <View  style={{ flex: 1, backgroundColor: '#472a5f'}}>
          <Routes/>
        </View>
    </NavigationContainer>
  );
};

export default App;
