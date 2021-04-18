import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 8px;

`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  margin-top: 8px;
  font-family: 'RobotoSlab-Medium';
  text-align: right;
`;

export const Poster = styled.ImageBackground`
  width: 100%;
  height: 60%;
  margin-bottom: 12px;
`

export const BackButton = styled.TouchableOpacity`

`;

export const GenreContainer = styled.View`
  border-radius: 8px;
  border-width: 1px;
  border-color: #008c94;
  align-items: center;
  justify-content: center
`

export const GenreText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  margin-bottom: 8px;
  color: #fff;
  padding: 2px;
`
 export const ContainerInfos = styled.View`
  padding: 0 20px;
 `

 export const Description = styled.Text`
 font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  text-align: center;
  color: #fff
 `
