import axios from "axios";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from './data'


const useMockData = false

async function getUser(userId) {
  if(useMockData) {
    const user = USER_MAIN_DATA.find((user) => user.id == userId)
    return Promise.resolve(user)
  }else {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}`);

      return response.data.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw new Error("Une erreur s'est produite lors de la récupération des données utilisateur.");
    }
  }
}
async function getAverageActi(userId) {
  if(useMockData) {
    const userSessions = USER_AVERAGE_SESSIONS.find((user) => user.userId == userId)
    return Promise.resolve(userSessions)
  }else {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching averageActi data:", error);
      throw new Error("Une erreur s'est produite lors de la récupération des données d'activité moyenne.");
    }
  }
}

async function getActivity(userId) {
  if(useMockData) {
    const userActivity = USER_ACTIVITY.find((user) => user.userId == userId)
    return Promise.resolve(userActivity)
  }else {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching activity data:", error);
      throw new Error("Une erreur s'est produite lors de la récupération des données d'activité.");
    }
  }
}

async function getPerformance(userId) {
  if(useMockData) {
    const userPerformance = USER_PERFORMANCE.find((user) => user.userId == userId)
    return Promise.resolve(userPerformance)
  }else {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching performance data:", error);
      throw new Error("Une erreur s'est produite lors de la récupération des données de performance.");
    }
  }
}

const ServiceApi = {
  getUser,
  getAverageActi,
  getActivity,
  getPerformance,
};

export default ServiceApi;
