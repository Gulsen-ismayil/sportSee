import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from './data'

async function getUser(userId) {
    const user = USER_MAIN_DATA.find((user) => user.id == userId)
    console.log(user);
    return Promise.resolve(user)
}
async function getAverageActi(userId) {
    const userSessions = USER_AVERAGE_SESSIONS.find((user) => user.userId == userId)
    return Promise.resolve(userSessions)
}
async function getActivity(userId) {
    const userActivity = USER_ACTIVITY.find((user) => user.userId == userId)
    return Promise.resolve(userActivity)
}
async function getPerformance(userId) {
    const userPerformance = USER_PERFORMANCE.find((user) => user.userId == userId)
    return Promise.resolve(userPerformance)
}

const MockDataApi = {
    getUser,
    getAverageActi,
    getActivity,
    getPerformance,
}

export default MockDataApi