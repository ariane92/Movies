import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import Routes from './routes/index'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './store/index'
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#472a5f" />
        <View  style={{ flex: 1, backgroundColor: '#472a5f'}}>
          <Routes/>
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
