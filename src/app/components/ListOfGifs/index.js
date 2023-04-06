import Item from './Item/index.js'
import './ListOfGifs.css'

export default function ListOfGifs ({ data, loading, error }) {
  return (
    <section className="container-listGifs">
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
      </section>
  )
}
