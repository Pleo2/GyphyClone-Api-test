import { API_URL, API_KEY } from './config'

export default async function getTrendingSearches () {
  const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`
  const res = await fetch(apiUrl)
  const apiResponse = await res.json()
  const { data } = apiResponse
  return data
}
