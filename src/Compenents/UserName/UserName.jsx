import PropTypes from'prop-types'
import './UserName.css'

/**
 * 
 * @param {string} props.firstName - le prenom de l'utilisateur 
 * @returns -Element react representant le nom d'utilisateur
 */

function UserName ({firstName}) {

  return (
    <div className="userName" id='error-message-userName'>
        <h1>Bonjour {' '}
            <span style={{color:'red'}}>
                {firstName}
            </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
    </div>
  )
}

UserName.propTypes = {
  firstName: PropTypes.string
}
export default UserName