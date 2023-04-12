import PropTypes from'prop-types'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faAppleWhole} from'@fortawesome/free-solid-svg-icons'
import calorie from'../../asset/calorie.png'
import proteine from'../../asset/proteine.png'
import burger from'../../asset/burger.png'
import './Result.css'

function Result({keyData}) {

    return (
        <div className="resultContainer" id='error-message-userResult'>
            <div className="resultElement">
                <div className='resultIcon' style={{backgroundColor:'#F6E1E1',color:'#FF0000'}}>
                    <img src={calorie} alt="calorie" />
                </div>
                <div className="resultText">
                    <h4>{keyData.calorieCount}kcal</h4>
                    <p>Calories</p>
                </div>
            </div>
            <div className="resultElement">
                <div className='resultIcon' style={{backgroundColor:'#D2E7F5',color:'#4AB8FF'}} >
                    <img src={proteine} alt="proteine" />
                </div>
                <div className="resultText">
                    <h4>{keyData.proteinCount}g</h4>
                    <p>Proteines</p>
                </div>
            </div>
            <div className="resultElement">
                <div className='resultIcon' style={{backgroundColor:'#F7F2DD',color:'#FDCC0C'}}>
                    <FontAwesomeIcon icon={faAppleWhole} />
                </div>
                <div className="resultText">
                    <h4>{keyData.carbohydrateCount}g</h4>
                    <p>Glucides</p>
                </div>
            </div>
            <div className="resultElement">
                <div className='resultIcon' style={{backgroundColor:'#F1D4DC',color:'#FD5181'}}>
                    <img src={burger} alt="burger" />
                </div>
                <div className="resultText">
                    <h4>{keyData.lipidCount}g</h4>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    )
}

Result.propTypes = {
    keyData: PropTypes.shape({
            calorieCount: PropTypes.number,
            proteinCount: PropTypes.number,
            carbohydrateCount: PropTypes.number,
            lipidCount: PropTypes.number
        })
    
}

export default Result


