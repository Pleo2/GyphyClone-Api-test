import { createContext, useState } from 'react'

const Context = createContext(null)

export const GifsProvider = ({ children }) => {
  const [gifsTrendingContext, setTrendingContext] = useState(null)
  const [gifsArtistsContext, setArtistsContext] = useState(null)
  const [gifsClipsContext, setClipsContext] = useState(null)

  const state = {
    gifsTrendingContext,
    gifsArtistsContext,
    gifsClipsContext
  }

  const setState = {
    setTrendingContext,
    setArtistsContext,
    setClipsContext
  }

  return (
    <Context.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
