class UserAverageSessions {
    constructor({userId,sessions}) {
        this.userId = userId
        // this.sessions = sessions.map((session) => ({
        //     day:parseInt(session.day),
        //     sessionLength:session.sessionLength,
        // }))
        this.sessions = sessions
    }
}

export default UserAverageSessions