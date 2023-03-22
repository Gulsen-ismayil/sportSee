import { useEffect, useState } from "react";
import axios from "axios";
import UserName from "./compenants/UserName/UserName";
import AverageSessions from "./compenants/AverageSessions/AverageSessions";
import DailyActivity from "./compenants/DailyActivity/DailyActivity";
import Performance from "./compenants/Performance/Performance";
import NavHori from "./compenants/NavHori/NavHori";
import NavVerti from "./compenants/NavVerti/NavVerti";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [averageActi, setAverageActi] = useState(null);
  const [activity, setActivity] = useState(null);
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/12")
      .then((response) => setUser(response.data))
      .then((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/12/average-sessions")
      .then((response) => setAverageActi(response.data))
      .then((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/12/activity")
      .then((response) => setActivity(response.data))
      .then((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/12/performance")
      .then((response) => setPerformance(response.data))
      .then((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <NavHori />
      <div className="navVerti-container">
        <NavVerti />
        <div className="container">
          <UserName user={user} />
          <DailyActivity activity={activity} />
          <AverageSessions averageActi={averageActi} />
          <Performance performance={performance} />
        </div>
      </div>
    </div>
  );
}

export default App;
