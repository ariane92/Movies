import React from 'react';
import { View, Text } from 'react-native';
import {useSelector} from 'react-redux'
import { Container } from './styles';

const Home: React.FC = () => {
  const store = useSelector(state => state)

  console.log(store)
  return (
    <Text>Olá</Text>
  )
}

export default Home;
