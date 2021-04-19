
import React, {useState, useEffect} from 'react';

import {SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { IState } from '../../store';

import Loading from '../../components/loading'
import axios from 'axios';
import {GenreText, Poster, Title} from './styles'
import { Container, Header, BackButton, ContainerInfos, Description } from './styles';

const Details: React.FC = () => {
  const [movies, setMovies] = useState<{}>()
  const navigation = useNavigation();
  const selectedMovie = useSelector<IState>(state => state.selectedMovie)
  const load = useSelector<IState>(state => state.loader)

  const getMovieRequest = async (selected) => {
		await axios.get(`https://www.omdbapi.com/?apikey=68b7a486&i=${selected}`).then((response) => {
      //console.log('response', response.data)
      setMovies(response.data)
    })
	};

  useEffect(() => {
    getMovieRequest(selectedMovie.imdbID)
  }, [])

  return (
    <SafeAreaView>
        {movies &&
          <Container>
            <Header>
              <BackButton onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={28} color="#008c94"/>
              </BackButton>
              <Title>{movies.Title}</Title>
            </Header>


          <Poster source={{uri: movies.Poster}} />
          {movies && <ContainerInfos>





                <GenreText>Genre: {movies.Genre}</GenreText>
                <GenreText>{movies.Year} - {movies.Runtime}</GenreText>

              <Description>{movies.Plot}</Description>

            </ContainerInfos>}

          </Container>}
                  <Loading />
    </SafeAreaView>
  )
}

export default Details;
