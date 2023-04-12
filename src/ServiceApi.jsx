import { useEffect, useState } from "react";
import axios from "axios";
import UserName from "./Compenents/UserName/UserName";
import AverageSessions from "./Compenents/AverageSessions/AverageSessions";
import DailyActivity from "./Compenents/DailyActivity/DailyActivity";
import Performance from "./Compenents/Performance/Performance";
import NavHori from "./Compenents/NavHori/NavHori";
import NavVerti from "./Compenents/NavVerti/NavVerti";
import Score from "./Compenents/Score/Score";
import Result from "./Compenents/Result/Result";

function ServiceApi() {

    const [user, setUser] = useState(null);
    const [averageActi, setAverageActi] = useState(null);
    const [activity, setActivity] = useState(null);
    const [performance, setPerformance] = useState(null);


    useEffect(() => {
      axios
        .get("http://localhost:3000/user/12")
        .then((response) => setUser(response.data))
        .catch(error => {
                    console.error(error)
                    document.getElementById('error-message-userName').textContent = 'Une erreur s\'est produite : ' + error.message;
                    document.getElementById('error-message-userScore').textContent = 'Une erreur s\'est produite : ' + error.message;
                    document.getElementById('error-message-userResult').textContent = 'Une erreur s\'est produite : ' + error.message;
        });
    }, []);
  
    useEffect(() => {
      axios
        .get("http://localhost:3000/user/12/average-sessions")
        .then((response) => setAverageActi(response.data))
        .catch(error => {
                    console.error(error)
                    document.getElementById('error-message-averageActivity').textContent = 'Une erreur s\'est produite : ' + error.message;           
        });
    }, []);
  
    useEffect(() => {
      axios
        .get("http://localhost:3000/user/12/activity")
        .then((response) => setActivity(response.data))
        .catch(error => {
                    console.error(error)
                    document.getElementById('error-message-dailyActivity').textContent = 'Une erreur s\'est produite : ' + error.message;           
        });
    }, []);
  
    useEffect(() => {
      axios
        .get("http://localhost:3000/user/12/performance")
        .then((response) => setPerformance(response.data))
        .catch(error => {
                    console.error(error)
                    document.getElementById('error-message-performance').textContent = 'Une erreur s\'est produite : ' + error.message;           
        });
    }, []);

    
    return (
    <div>
        <NavHori />
            <div className="navVerti-container">
                <NavVerti />
                <div className="appContainer">
                    {user ?  <UserName firstName={user.data.userInfos.firstName} /> : ''}
                    <div className="graphicAll-result">
                        <div className="graphicAll">
                            {activity ?  <DailyActivity sessions={activity.data.sessions} /> : ''}
                            <div className="graphicRectagle">
                                {averageActi ? <AverageSessions sessions={averageActi.data.sessions} /> : ' '}
                                {performance ? <Performance performance={performance.data} /> : ''}
                                {user ? <Score todayScore={user.data.todayScore}/> : ''}
                            </div>
                        </div>
                        {user ? <Result keyData={user.data.keyData} /> : ''}               
                    </div>
                </div>
            </div>
    </div>
    )
}

export default ServiceApi