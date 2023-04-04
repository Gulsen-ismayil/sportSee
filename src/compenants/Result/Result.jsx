import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faDumbbell,faAppleWhole,faBurger} from'@fortawesome/free-solid-svg-icons'

import './Result.css'

function Result({user}) {
    console.log(user.data.keyData)
    return (
        <div className="resultContainer">
            <div className="resultElement">
                <div className='resultIcon' style={{backgroundColor:'#F6E1E1',color:'#FF0000'}}>
                    <FontAwesomeIcon icon={faDumbbell} />
                </div>
                <div className="resultText">
                    <h4>{user.data.keyData.calorieCount}kcal</h4>
                    <p>Calories</p>
                </div>
            </div>
            <div className="resultElement">
                <div className='resultIcon' style={{backgroundColor:'#D2E7F5',color:'#4AB8FF'}} >
                    <FontAwesomeIcon icon={faDumbbell} />
                </div>
                <div className="resultText">
                    <h4>{user.data.keyData.proteinCount}g</h4>
                    <p>Proteines</p>
                </div>
            </div>
            <div className="resultElement">
                <div className='resultIcon' style={{backgroundColor:'#F7F2DD',color:'#FDCC0C'}}>
                    <FontAwesomeIcon icon={faAppleWhole} />
                </div>
                <div className="resultText">
                    <h4>{user.data.keyData.carbohydrateCount}g</h4>
                    <p>Glucides</p>
                </div>
            </div>
            <div className="resultElement">
                <div className='resultIcon' style={{backgroundColor:'#F1D4DC',color:'#FD5181'}}>
                    <FontAwesomeIcon icon={faBurger} />
                </div>
                <div className="resultText">
                    <h4>{user.data.keyData.lipidCount}g</h4>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    )
}

export default Result