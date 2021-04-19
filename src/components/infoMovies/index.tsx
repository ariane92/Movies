import React, {useCallback} from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {  IMoviesList } from '../../store/modules/movie/types';
import { useNavigation } from '@react-navigation/native';
 import { Container, MovieContainer, ButtonMovie, YearText, Poster, Title, Labels } from './styles';
import { useDispatch } from 'react-redux';
import { selectedMovies } from '../../store/modules/movie/actions';

const InfoMovies: React.FC<IMoviesList> = ({movies}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const handleSelectMovie = useCallback(
    (imdbID: string) => {
      navigation.navigate('Details');
      dispatch(selectedMovies(imdbID))
    },

    [navigation],
  );

  movies.sort(function(aTitle, bTitle){
    if(aTitle.Title < bTitle.Title){
      return -1;
    }else{
      return true
    }
  })
  return (
    <Container>
      <View>
      <ScrollView>
        {movies.map((movie) => (
          <MovieContainer>
            <ButtonMovie onPress={() => handleSelectMovie(movie.imdbID)}>
              <Poster source={{uri: movie.Poster}} />
              <Labels>
                <Title key={movie.imdbID} testID="movie">{movie.Title}</Title>
                <YearText>{movie.Year}</YearText>
              </Labels>
            </ButtonMovie>
          </MovieContainer>

        ))}
         </ ScrollView>
      </View>
    </Container>
  )
}

export default InfoMovies;
