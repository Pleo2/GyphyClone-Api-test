import useFetch from "./useFetch";

const API_KEY = 'HGY9fAEpopir5nb8Fy54psJxt1kzqpRM';
const API_URL = (keyboard) =>
`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyboard}&limit=25&offset=0&rating=g&lang=es`;

export default function useGetGifs(keyboard) {
  const { data, loading, error, handleCancelRequest } = useFetch(API_URL(keyboard))
  return {
    data, 
    loading,
    error,
    handleCancelRequest
  }
} 