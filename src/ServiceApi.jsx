import axios from "axios";

async function getUser() {
  try {
    const response = await axios.get("http://localhost:3000/user/12");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Une erreur s'est produite lors de la récupération des données utilisateur.");
  }
}

async function getAverageActi() {
  try {
    const response = await axios.get("http://localhost:3000/user/12/average-sessions");
    return response.data;
  } catch (error) {
    console.error("Error fetching averageActi data:", error);
    throw new Error("Une erreur s'est produite lors de la récupération des données d'activité moyenne.");
  }
}

async function getActivity() {
  try {
    const response = await axios.get("http://localhost:3000/user/12/activity");
    return response.data;
  } catch (error) {
    console.error("Error fetching activity data:", error);
    throw new Error("Une erreur s'est produite lors de la récupération des données d'activité.");
  }
}

async function getPerformance() {
  try {
    const response = await axios.get("http://localhost:3000/user/12/performance");
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
