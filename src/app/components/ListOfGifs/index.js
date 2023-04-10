import Item from './Item/index.js'
import Masonry from 'react-masonry-css'
import './ListOfGifs.css'

export default function ListOfGifs ({ data, loading, error }) {
  const breakpointColumnsObj = {
    default: 4,
    248: 4
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data?.length < 1 && (<h2>this gifs not found...</h2>)}
        {!loading &&
          data &&
          data?.map((gif, index) => (
            <Item
            dataSrc={gif?.url}
            id={gif?.id}
            key={gif?.id + index}
            gif={gif?.title}
            />
          ))}
    </Masonry>
  )
}
