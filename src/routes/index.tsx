import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Details from '../screens/Details'
const App = createStackNavigator()

const AppRoutes: React.FC = () => (
  <App.Navigator screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#472a5f'}}}>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Details" component={Details} />
  </App.Navigator>
)

export default AppRoutes;
