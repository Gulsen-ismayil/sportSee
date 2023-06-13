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
import User from'./Entites/User'
import UserActivity from'./Entites/UserActivity'
import UserAverageSessions from'./Entites/UserAverageSessions'
import UserPerformance from'./Entites/UserPerformance'

function App() {

  const [user, setUser] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [activity, setActivity] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [newDataScore, setNewDataScore] = useState(null)
  // const [newDataAverageSessions, setNewDataAverageSessions] = useState(null)
  const [newDataPerformance, setNewDataPerformance] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
    const userId = extractUserIdFromUrl()

      try {
        const userResponse = await ServiceApi.getUser(userId);
        const averageSessionsResponse = await ServiceApi.getAverageSessions(userId);
        const activityResponse = await ServiceApi.getActivity(userId);
        const performanceResponse = await ServiceApi.getPerformance(userId);
        const formattedUserResponse = new User(userResponse)
        const formattedUserActivityResponse = new UserActivity(activityResponse)
        const formattedUserAverageSessionsResponse = new UserAverageSessions(averageSessionsResponse)
        const formattedUserPerformanceResponse = new UserPerformance(performanceResponse)

        setUser(formattedUserResponse);
        setAverageSessions(formattedUserAverageSessionsResponse);
        setActivity(formattedUserActivityResponse);
        setPerformance(formattedUserPerformanceResponse);

        const formattedNewDataScore = User.getNewDataScore(formattedUserResponse.todayScore)
        setNewDataScore(formattedNewDataScore)

        // const formattedNewDataAverageSessions = UserAverageSessions.formatXAxisTick
        // setNewDataAverageSessions(formattedNewDataAverageSessions)

          // create new data that has the same format as the example in Rechars
        const newDataPerformance = formattedUserPerformanceResponse.data.map(item => {
        return {kind: formattedUserPerformanceResponse.kind[item.kind], value:item.value}
        })
        setNewDataPerformance(newDataPerformance)

      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, []);


  const extractUserIdFromUrl = () => {
    const url = window.location.href
    const urlParts = url.split('/')
    const idIndex = urlParts.findIndex(part => part === 'user') + 1
    const userId = parseInt(urlParts[idIndex])
    return userId
  }


  return (
    <div className="App">
            <NavHori />
            <div className="navVerti-container">
                <NavVerti />
                <div className="appContainer">
                    {user ?  <UserName firstName={user.userInfos.firstName} /> : ''}
                    <div className="graphicAll-result">
                        <div className="graphicAll">
                            {activity ?  <DailyActivity activity={activity}/> : ''}
                            <div className="graphicRectagle">
                                {averageSessions ? <AverageSessions averageSessions = {averageSessions} /> : ' '}
                                {performance ? <Performance newData={newDataPerformance}/> : ''}
                                {user ? <Score todayScore={user.todayScore} newData={newDataScore}/> : ''}
                            </div>
                        </div>
                        {user ? <Result keyData={user.keyData} /> : ''}               
                    </div>
                </div>
            </div>
    </div>
  );
}

export default App;