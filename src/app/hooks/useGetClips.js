import useFetch from './useFetch'
import { API_URL_VIDEOS } from '../services/config'

export default function useGetClips () {
  const { data, loading, error, handleCancelRequest } = useFetch(API_URL_VIDEOS)
  const clipsData = []

  data.map(clip => {
    const { id, title } = clip
    const { url } = clip?.images?.downsized_medium
    const autor = {
      userName: clip?.username,
      isVerified: clip?.user?.is_verified,
      autorImgUrl: clip?.user?.avatar_url?.slice(0, clip.user.avatar_url.length - 4),
      typeAutorImgUrl: clip?.user?.avatar_url?.slice(
        clip?.user?.avatar_url?.length - 4,
        clip?.user?.avatar_url?.length
      )
    }

    return clipsData.push({ title, url, autor, id })
  })
  return {
    clipsData,
    loading,
    error,
    handleCancelRequest
  }
}
