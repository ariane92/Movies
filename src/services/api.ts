import axios from 'axios'

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=68b7a486&'
})


export default api;
