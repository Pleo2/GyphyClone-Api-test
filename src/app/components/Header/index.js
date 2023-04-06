import Logo from './Logo'
import LinksNav from './LinksNav'
import Buttons from './Buttons'
import './Header.css'
import PerfilSeccion from './PerfilSeccion'

export default function Header () {
  return (
    <header>
      <nav>
        <Logo/>
        <LinksNav/>
        <Buttons/>
        <PerfilSeccion/>
      </nav>
    </header>
  )
}
