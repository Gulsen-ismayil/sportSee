// import {Link} from'react-router-dom'
import logo from'../../asset/logo.png'
import './NavHori.css'

function NavHori() {
  return (
    <div className='navHorizontal' >
       <img className='logo' src={logo} alt="logo" />
       <div className="menu">
          <p>Accueil</p>
          <p>Profil</p>
          <p>Réglage</p>
          <p>Communauté</p>
       </div>
    </div>
  )
}

export default NavHori