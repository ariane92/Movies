import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { Container } from '../../screens/Home/styles';
import {IState} from '../../store/index'
// import { Container } from './styles';

const Loading: React.FC = () => {
  const loading = useSelector<IState>(state => state.loader)
  console.log(loading)
  return (
    <Container>
      {!loading ? null : <ActivityIndicator />}
    </Container>

  )
}

export default Loading;
