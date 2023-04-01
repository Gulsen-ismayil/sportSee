import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faDumbbell} from'@fortawesome/free-solid-svg-icons'

import './Result.css'

function Result({user}) {
    console.log(user.data.keyData)
    return (
        <div className="resultContainer">
            <div className="resultElement">
                <div>
                    <FontAwesomeIcon icon={faDumbbell} />
                </div>
                <div className="resultText">
                    <h4>{user.data.keyData.calorieCount}Kcal</h4>
                    <p>Calories</p>
                </div>
            </div>
            <div className="resultElement">
                <div>
                    <FontAwesomeIcon icon={faDumbbell} />
                </div>
                <div className="resultText">
                    <h4>{user.data.keyData.proteinCount}g</h4>
                    <p>Proteines</p>
                </div>
            </div>
            <div className="resultElement">
                <div>
                    <FontAwesomeIcon icon={faDumbbell} />
                </div>
                <div className="resultText">
                    <h4>{user.data.keyData.carbohydrateCount}g</h4>
                    <p>Glucides</p>
                </div>
            </div>
            <div className="resultElement">
                <div>
                    <FontAwesomeIcon icon={faDumbbell} />
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