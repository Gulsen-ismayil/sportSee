class UserActivity {
    constructor({userId,sessions}) {
        this.userId = userId
        this.sessions = sessions
    }

  dateTick(tick){
    const date = new Date(tick)
    return date.getDate()
  }
  CustomLegend(value) {
      let content;
      if (value === 'kilogram') {
        content = 'Poids (kg)';
      } else if (value === 'calories') {
        content = 'Calories brûlées (kCal)';
      }
      return <span style={{ fontSize: '12px' }}>{content}</span>;
  }
  
}
export default UserActivity