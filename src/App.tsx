import React from 'react';
import {View, StatusBar} from 'react-native';
const App: React.FC = () => {
  return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#472a5f" />
        <View  style={{ flex: 1, backgroundColor: '#472a5f'}}/>
    </>
  );
};

export default App;
