import {  useState } from "react";
// import axios from "axios";
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

function App() {

  const [user, setUser] = useState(null);
  const [averageActi, setAverageActi] = useState(null);
  const [activity, setActivity] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [error,setError] = useState(false)
  const [data,setData] = useState(null)

// console.log(data)
  const handleDataFetched = (key,fetchedData) => {
      switch(key) {
        case 'user':
          setUser(fetchedData)
          break
        case 'averageActi':
          setAverageActi(fetchedData)
          break
        case 'activity':
          setActivity(fetchedData)
          break
        case 'performance':
          setPerformance(fetchedData)
          break
        default:
          break
      }
  }

  const handleApiError = (key, errorMessage) => {
    setError({key, message: errorMessage})
  }
console.log(user)

  return (
    <div className="App">
      {/* <ServiceApi onDataFetched={handleDataFetched} error={handleApiError}/> */}
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
