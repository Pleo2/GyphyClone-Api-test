import { API_KEY } from "../services/config";
import useFetch from "./useFetch";


export default function useGetTrending(limit = 50) {
  const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&rating=g`;
  const { data, loading, error, handleCancelRequest } = useFetch(API_URL)
    return {
      data, 
      loading,
      error,
      handleCancelRequest
  }
}