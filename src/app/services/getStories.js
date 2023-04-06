/* eslint-disable camelcase */
import { API_KEY_STORIES, API_URL_STORIES } from './config'

export const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(story => {
      const { id } = story.cover_gif.gif
      const { title, story_id } = story
      const { url } = story.cover_gif.gif.images.downsized
      const typeAutorImgUrl = story.user.avatar_url.slice(story.user.avatar_url.length - 4, story.user.avatar_url.length)
      const autorImgUrl = story.user.avatar_url.slice(0, story.user.avatar_url.length - 4)
      return { title, story_id, url, autorImgUrl, typeAutorImgUrl, id }
    })
    return gifs
  }
  return []
}

export default async function getGifs ({
  day = new Date()
} = {}) {
  const apiURL =
  `${API_URL_STORIES}?api_key=${API_KEY_STORIES}&sort=desc&gif_hydration_method=COVER_ONLY&since=${day.toISOString()}&next_cursor=13999`
  const res = await fetch(apiURL)
  const apiResponse = await res.json()
  return fromApiResponseToGifs(apiResponse)
}
