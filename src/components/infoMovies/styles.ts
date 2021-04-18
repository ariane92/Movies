import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-top: 60px;
  background-color: #472a5f;
  flex-direction: column;
  margin-vertical: 2px;
  margin-bottom: 6px;
  padding: 0 10px;


`
export const ButtonMovie = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

export const MovieContainer = styled.View`
  border-bottom-width: 0.2px;
  border-bottom-color: #008c94;
`;

export const Poster = styled.Image`
  width: 82px;
  height: 82px;
  margin-right: 8px;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  text-align: center;


`;

export const Labels = styled.View`
  flex-direction: column;
  align-items: flex-start;

`;


