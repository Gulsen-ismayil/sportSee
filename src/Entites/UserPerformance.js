class UserPerformance {
    constructor({userId,kind,data}){
        this.userId = userId 
        this.kind = kind
        this.data = data
    }
    newData(data) {
        const newData = data.data.map(item => {
            return {kind: data.kind[item.kind], value:item.value}
        })
        return newData
    }

}

export default UserPerformance