import axios from "axios";

async function getUser(userId) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Une erreur s'est produite lors de la récupération des données utilisateur.");
  }
}

async function getAverageActi(userId) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching averageActi data:", error);
    throw new Error("Une erreur s'est produite lors de la récupération des données d'activité moyenne.");
  }
}

async function getActivity(userId) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
    return response.data;
  } catch (error) {
    console.error("Error fetching activity data:", error);
    throw new Error("Une erreur s'est produite lors de la récupération des données d'activité.");
  }
}

async function getPerformance(userId) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
    return response.data;
  } catch (error) {
    console.error("Error fetching performance data:", error);
    throw new Error("Une erreur s'est produite lors de la récupération des données de performance.");
  }
}

const ServiceApi = {
  getUser,
  getAverageActi,
  getActivity,
  getPerformance,
};

export default ServiceApi;
