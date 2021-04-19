import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView,  KeyboardAvoidingView, Platform, Text} from 'react-native';
import { SearchBar } from 'react-native-elements'
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { IMovieState } from '../../store/modules/movie/types';




import InfoMovies from '../../components/infoMovies'
import { listOfMovies } from '../../store/modules/movie/actions';
import api from '../../services/api';
import axios from 'axios';
Icon.loadFont()

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const [movies, setMovies] = useState<IMovieState[]>([])
  const [search, setSearch] = useState('')
  console.disableYellowBox = true;

  const getListOfMovies = async (search) => {
		const url = `https://www.omdbapi.com/?apikey=68b7a486&s=${search}`;
		const resp = await fetch(url);
		const respJson = await resp.json();

		if (respJson.Search) {
			setMovies(respJson.Search);
      dispatch(listOfMovies(respJson.Search))
		}
	};

	useEffect(() => {
		getListOfMovies(search);
	}, [search]);
  return (
    <SafeAreaView>
      <Container>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <SearchBar
            testID="search"
            searchIcon={{ size: 20, color: '#fffe' }}
            onChangeText={(text) => setSearch(text)}
            onClear={(text) => setSearch('')}
            placeholder="Search..."
            value={search}
            containerStyle={{backgroundColor: 'transparent', borderStyle: 'dashed', marginBottom: 38}}
            inputContainerStyle={{backgroundColor: '#008c94'}}
            placeholderTextColor='#cecece'
            inputStyle={{color: '#fffe'}}
            clearIcon={{color: '#fffe'}}
          />
        </KeyboardAvoidingView>
          <InfoMovies movies={movies} />
      </Container>
    </SafeAreaView>
  )
}

export default Home;
