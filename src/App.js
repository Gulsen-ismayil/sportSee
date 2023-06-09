import { useState,useEffect } from "react";
import UserName from "./Compenents/UserName/UserName";
import AverageSessions from "./Compenents/AverageSessions/AverageSessions";
import DailyActivity from "./Compenents/DailyActivity/DailyActivity";
import Performance from "./Compenents/Performance/Performance";
import NavHori from "./Compenents/NavHori/NavHori";
import NavVerti from "./Compenents/NavVerti/NavVerti";
import Score from "./Compenents/Score/Score";
import Result from "./Compenents/Result/Result";
import "./App.css";
import ServiceApi from "./ServiceApi";
// import MockDataApi from "./MockServiceApi";

function App() {

  const [user, setUser] = useState(null);
  const [averageActi, setAverageActi] = useState(null);
  const [activity, setActivity] = useState(null);
  const [performance, setPerformance] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = extractUserIdFromUrl()
        const userResponse = await ServiceApi.getUser(userId);
        const averageActiResponse = await ServiceApi.getAverageActi(userId);
        const activityResponse = await ServiceApi.getActivity(userId);
        const performanceResponse = await ServiceApi.getPerformance(userId);

        setUser(userResponse);
        setAverageActi(averageActiResponse);
        setActivity(activityResponse);
        setPerformance(performanceResponse);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
        // setError("Une erreur s'est produite lors de la récupération des données.")
      }
    };

    fetchData();
  }, []);

  const extractUserIdFromUrl = () => {
    const url = window.location.href
    const urlParts = url.split('/')
    const idIndex = urlParts.findIndex(part => part === 'user') + 1
    const userId = urlParts[idIndex]
    return userId
  
  }

  return (
    <div className="App">
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
  );
}

export default App;