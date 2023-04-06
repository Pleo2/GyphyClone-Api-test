import { Link } from 'react-router-dom'
import './Buttons.css'

export default function Buttons () {
  return (
    <>
      <div className="container--buttons">
        <button className="button-up">
          <Link to="/upload">Upload</Link>
        </button>
        <button className="button-create">
          <Link to="/create">Create</Link>
        </button>
      </div>
    </>
  )
}
