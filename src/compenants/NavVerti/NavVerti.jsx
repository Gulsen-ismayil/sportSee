import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faPersonSwimming,faDumbbell,faPersonBiking} from'@fortawesome/free-solid-svg-icons'
import './NavVerti.css'

function NavVerti() {
  return (
    <div className="navVerti" >
      <div className="icons">
        <div className="icon">
          <FontAwesomeIcon icon={faPersonSwimming} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faPersonSwimming} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faPersonBiking} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faDumbbell} />
        </div>
      </div>
      <p className='navVertiText'>Copiryght, SportSee 2020</p>
    </div>
  )
}

export default NavVerti