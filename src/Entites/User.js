class User {
    constructor({id,userInfos,todayScore,keyData}) {
        this.id = id
        this.userInfos = userInfos
        this.todayScore = todayScore
        this.keyData = keyData
    }

    static getNewDataScore(todayScore) {
        return [
            { value: todayScore * 100 },
            { value: 100 - todayScore * 100 }
        ];
    }
}

export default User