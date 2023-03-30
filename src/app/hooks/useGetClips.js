import useFetch from './useFetch'
import { API_KEY } from '../services/config'

const API_URL_VIDEOS = `https://api.giphy.com/v1/videos/trending?api_key=${API_KEY}&limit=3&rating=g`

export default function useGetClips () {
  const { data, loading, error, handleCancelRequest } = useFetch(API_URL_VIDEOS)
  return {
    data,
    loading,
    error,
    handleCancelRequest
  }
}
