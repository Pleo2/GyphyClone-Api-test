import { API_KEY, API_URL } from './config'

export const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(gif => {
      const { title, id } = gif
      const urlArtistGif = gif?.images?.preview_webp?.url
      const { url } = gif?.images?.downsized_medium
      const autor = {
        userName: gif?.username,
        isVerified: gif?.user?.is_verified,
        autorImgUrl: gif?.user?.avatar_url?.slice(0, gif.user.avatar_url.length - 4),
        typeAutorImgUrl: gif?.user?.avatar_url?.slice(
          gif?.user?.avatar_url?.length - 4,
          gif?.user?.avatar_url?.length
        )
      }
      return { title, id, url, autor, urlArtistGif }
    })
    return gifs
  }
  return []
}

export default async function getTrending ({
  limit = 25,
  page = 0,
  offset = 0
} = {}) {
  const apiUrl = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g`

  const res = await fetch(apiUrl)
  const apiResponse = await res.json()
  return fromApiResponseToGifs(apiResponse)
}
