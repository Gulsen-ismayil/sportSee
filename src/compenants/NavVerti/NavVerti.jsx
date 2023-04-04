import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faPersonBiking} from'@fortawesome/free-solid-svg-icons'
import hat from'../../asset/hat.png'
import yoga from'../../asset/yoga.png'
import swimming from'../../asset/swimming.png'
import gym from'../../asset/gym.png'
import './NavVerti.css'

function NavVerti() {
  return (
    <div className="navVerti" >
      <div className="icons">
        <div className="icon" id='iconYoga'>
          <img src={hat} alt="hat" />
          <img src={yoga} alt="yoga" />
        </div>
        <div className="icon" id='iconSwimming'>
          <img src={hat} alt="hat" />
          <img src={swimming} alt="swimming" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faPersonBiking} />
        </div>
        <div className="icon">
          <img src={gym} alt="gym" />
        </div>
      </div>
      <p className='navVertiText'>Copiryght, SportSee 2020</p>
    </div>
  )
}

export default NavVerti