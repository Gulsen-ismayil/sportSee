class UserAverageSessions {
    constructor({userId,sessions}) {
        this.userId = userId
        this.sessions = sessions
    }

    static formatXAxisTick(value) {
        const dayAbbreviations = ['L','M','M','J','V','S','D']
        return dayAbbreviations[value - 1]
    }
}

export default UserAverageSessions