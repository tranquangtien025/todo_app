import axios from 'axios'
import { Movie } from '../../models/movie'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 3000,
})

export const getMovies = (endpoint: string, config: any) => {
  return instance.get<Movie[]>(endpoint, config)
}

export const getMovieDetail = (id: string) => {
  return instance.get<Movie>(`/movies/${id}`)
}

export const postMovie = (endpoint: string, body: any, config: any) => {
  return instance.post<Movie>(endpoint, body, config)
}

export const putMovie = (id: string, body: any, config: any) => {
  return instance.put<Movie>(`/movies/${id}`, body, config)
}

export const deleteMovie = (id: string, config: any) => {
  return instance.delete(`/movies/${id}`, config)
}