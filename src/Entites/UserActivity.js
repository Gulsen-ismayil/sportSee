class UserActivity {
    constructor({userId,sessions}) {
        this.userId = userId
        // this.sessions = sessions.map((session) => ({
        //     day:session.day.toString(),
        //     kilogram:session.kilogram,
        //     calories:session.calories,
        // }))
        this.sessions = sessions
    }
}

export default UserActivity