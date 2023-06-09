// import {useState,useEffect } from "react";
// import UserName from "./Compenents/UserName/UserName";
// import AverageSessions from "./Compenents/AverageSessions/AverageSessions";
// import DailyActivity from "./Compenents/DailyActivity/DailyActivity";
// import Performance from "./Compenents/Performance/Performance";
// import NavHori from "./Compenents/NavHori/NavHori";
// import NavVerti from "./Compenents/NavVerti/NavVerti";
// import Score from "./Compenents/Score/Score";
// import Result from "./Compenents/Result/Result";
// import "./App.css";
// import MockDataApi from "./MockServiceApi";

// function MockApp() {

//   const [user, setUser] = useState(null);
//   const [averageActi, setAverageActi] = useState(null);
//   const [activity, setActivity] = useState(null);
//   const [performance, setPerformance] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const userId = extractUserIdFromUrl()
//     MockDataApi.getUser(userId)
//         .then((user) => {
//             setUser(user)
//         })
//         .catch((error) => {
//             console.error(error)
//         })
//     MockDataApi.getAverageActi(userId)
//         .then((averageActi) => {
//             setAverageActi(averageActi)
//         })
//         .catch((error) => {
//             console.error(error)
//         })
//     MockDataApi.getActivity(userId)
//         .then((activity) => {
//             setActivity(activity)
//         })
//         .catch((error) => {
//             console.error(error)
//         })
//     MockDataApi.getPerformance(userId)
//         .then((performance) => {
//             setPerformance(performance)
//         })
//         .catch((error) => {
//             console.error(error)
//         })
//     }, []);
    
//     console.log(averageActi);
//     console.log(performance);
//     console.log(activity);
//   const extractUserIdFromUrl = () => {
//     const url = window.location.href
//     const urlParts = url.split('/')
//     const idIndex = urlParts.findIndex(part => part === 'user') + 1
//     const userId = urlParts[idIndex]
//     return userId
  
//   }

//   return (
//     <div className="App">
//             <NavHori />
//             <div className="navVerti-container">
//                 <NavVerti />
//                 <div className="appContainer">
//                    {user ? <UserName firstName={user.userInfos.firstName }/> : ''} 
//                     <div className="graphicAll-result">
//                         <div className="graphicAll">
//                             {activity ?  <DailyActivity sessions={activity.sessions} /> : ''}
//                             <div className="graphicRectagle">
//                                 {averageActi ? <AverageSessions sessions={averageActi.sessions} /> : ' '}
//                                 {performance ? <Performance performance={performance} /> : ''}
//                                 {user ? <Score todayScore={user.todayScore}/> : ''}
//                             </div>
//                         </div>
//                         {user ? <Result keyData={user.keyData} /> : ''}               
//                     </div>
//                 </div>
//             </div>
//     </div>
//   );
// }

// export default MockApp;