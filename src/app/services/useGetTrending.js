import React from "react";
import useFetch from "./useFetch";

const API_KEY = 'HGY9fAEpopir5nb8Fy54psJxt1kzqpRM';
const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`;

export default function useGetTrending() {
  const { data, loading, error, handleCancelRequest } = useFetch(API_URL)
    return {
      data, 
      loading,
      error,
      handleCancelRequest
  }
}