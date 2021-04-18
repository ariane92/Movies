import React, {useCallback} from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { IIMDBState, IMoviesList } from '../../store/modules/movie/types';
import { useNavigation } from '@react-navigation/native';
 import { Container, MovieContainer, ButtonMovie, Poster, Title, Labels } from './styles';
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
  return (
    <Container>
      <View>
      <ScrollView>
        {movies.map((movie) => (
          <MovieContainer>
            <ButtonMovie onPress={() => handleSelectMovie(movie.imdbID)}>
              <Poster source={{uri: movie.Poster}} />
              <Labels>
                <Title key={movie.imdbID}>{movie.Title}</Title>
                <Title>{movie.Year}</Title>
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
