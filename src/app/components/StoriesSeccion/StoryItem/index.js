import React, { useCallback, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './StoryItem.css'
import useNearScreen from 'app/hooks/useNearScreen'

function StoryItem ({ autor, storyImg, storyTitle, index, gifId }) {
  const externalRef = useRef()
  const autorImgRef = useRef()
  const navigate = useNavigate()

  const { isNearScreen } = useNearScreen({
    distance: '100px',
    externalRef: externalRef || null,
    once: false
  })

  const handleImgUrl = useCallback(() => {
    externalRef.current.style.backgroundImage = `url(${storyImg})`
    autorImgRef.current.src = autor
  }, [])

  useEffect(() => {
    if (isNearScreen) handleImgUrl()
  }, [isNearScreen])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className='container-img-stories'
        onClick={() => navigate(`details/${gifId}`)}
      >
        <div
            ref={externalRef}
            className="img-story"
        />
        <img
            ref={autorImgRef}
            className="img-autor-story"
            src={'hola'}
            alt={`img autor of ${storyTitle}`}
        />
        <p className="story-title">{storyTitle}</p>
      </motion.div>
    </AnimatePresence>
  )
}

export default React.memo(StoryItem)
