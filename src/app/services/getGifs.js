import { API_KEY, API_URL } from './config'

export const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { images, title, id } = image
      const { url } = images.preview_webp
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default async function getGifs ({
  limit = 20,
  keyword = 'ramdom',
  page = 0
} = {}) {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=G&lang=en`

  const res = await fetch(apiUrl)
  const apiResponse = await res.json()
  return fromApiResponseToGifs(apiResponse)
}
