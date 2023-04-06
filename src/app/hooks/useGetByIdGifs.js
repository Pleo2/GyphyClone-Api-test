import { API_KEY, API_URL } from 'app/services/config'
import useFetch from './useFetch'

export default function useGetByIdGifs ({ GifsId }) {
  const dataUrl = `${API_URL}/gifs/${GifsId}?api_key=${API_KEY}`
  const { data, loading, error } = useFetch(dataUrl)

  return {
    data,
    loading,
    error
  }
}
