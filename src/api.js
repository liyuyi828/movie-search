import axios from 'axios'
import { debounce } from 'debounce'

const searchMovieApi = function (query, searchBy, callback) {
  const url = 'https://api.themoviedb.org/3/search'
  const api_key = 'fake_api_key' // replace this with an working api key
  axios.get(`${url}/${searchBy || 'movie'}`, {
    params: {
      api_key,
      query
    }
  }).then(res => {
    let data = res.data.results.map((e) => {
      return {
        title: e.title || e.name,
        date: e.release_date || e.first_air_date,
        rating: e.vote_average,
        vote: e.vote_count, 
        poster: e.poster_path
      }
    })
    callback(data)
  })
}

const searchMovie = debounce(searchMovieApi, 400)

export default searchMovie
