import { Link } from 'react-router-dom'
import './LinksNav.css'

export default function LinksNav () {
  return (
    <>
    <div className="container--Link">
          <Link to="/search/reactions">Reactions</Link>
          <Link to="/search/entertainment">Entertainment</Link>
          <Link to="/search/sports">Sports</Link>
          <Link to="/search/stickers">Stickers</Link>
          <Link to="/search/artists">Artists</Link>
          <Link to="/search/random">...</Link>
        </div>
    </>
  )
}
