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
  font-size: 22px;
  color: #fff;
  margin-top: 8px;
  font-family: 'RobotoSlab-Medium';
  text-align: right;
`;

export const Poster = styled.ImageBackground`
  width: 100%;
  height: 50%;
  margin-bottom: 12px;
`

export const BackButton = styled.TouchableOpacity`

`;

export const GenreContainer = styled.View`
  border-color: #008c94;
  align-items: center;
  justify-content: center
`

export const GenreText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  margin-bottom: 8px;
  color: #fff;
  padding: 2px;
  text-align: center;
  margin-right: 8px
`
 export const ContainerInfos = styled.View`
  padding: 0 20px;
 `

 export const Description = styled.Text`
 font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  text-align: left;
  color: #fff
 `
 export const Infos = styled.Text`
 font-family: 'RobotoSlab-Medium';
  font-size: 14px;
  text-align: right;
  color: #008c94;
 `
 export const ScoreContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
 `
export const Score = styled.Text`
font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  text-align: center;
  color: #fff;
  margin-left: 8px;
`

