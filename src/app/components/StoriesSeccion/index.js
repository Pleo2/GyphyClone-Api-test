import { useEffect, useRef, useCallback } from 'react'
import moment from 'moment'
import debounce from 'lodash.debounce'
import useNearScreen from 'app/hooks/useNearScreen'
import Spinner from '../Spinner'
import StoryItem from './StoryItem'
import TitleSeccions from '../TitleSeccions'
import useGetStories from 'app/hooks/useGetStories'
import { removeDuplicatesStories } from 'app/services/utils'
import './StoriesSeccion.css'

const IMAGE_AVATAR_SCALE = '/80h'

export default function StoriesSeccion () {
  const externalRef = useRef()
  const { stories, loading, error, setDay } = useGetStories()
  const { isNearScreen } = useNearScreen({
    distance: '600px',
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(
    debounce(() => setDay(prevDay => moment(prevDay).subtract(2, 'day')), 200),
    [setDay]
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      <section className="container-storiesSeccion">
        <TitleSeccions
          key="TitleSeccion-Stories"
          pathSvg={'/stories.svg'}
          title={'Stories'}
        />

        <div className="container-stories">
          {loading && <Spinner />}
          {stories && !error
            ? removeDuplicatesStories(stories)
              .map((story, index) => {
                return (
                    <StoryItem
                      index={index}
                      gifId={story?.id}
                      key={`${story?.story_id}${index}`}
                      autor={`${story?.autorImgUrl}${IMAGE_AVATAR_SCALE}${story?.typeAutorImgUrl}` }
                      storyImg={story?.url}
                      storyTitle={story?.title}
                    />
                )
              })
            : null}
        </div>
      </section>
      <Spinner/>
      <div
        className="visor-seccion-stories"
        ref={externalRef}
      ></div>
    </>
  )
}
