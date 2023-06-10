import PropTypes from'prop-types'
import {LineChart,CartesianGrid,XAxis,Tooltip,Line} from 'recharts'
import './AverageSessions.css';

function AverageSessions({sessions}) {
  // to convert the numbers 1 through 7 to the first letter of the corresponding day of the week in English. 
  const dayAbbreviations = ['L','M','M','J','V','S','D']

  function formatXAxisTick(value) {
    return dayAbbreviations[value-1]
  }
  console.log(sessions);

  return (
    <div className='averageSessionContainer' id='error-message-averageActivity' >
       <p className='averageSessionTitle'>Durée moyenne des <br/>sessions</p>
       <LineChart className='averageSessionLineChart' width={220} height={130} data={sessions} >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
          <XAxis dataKey="day" axisLine={false} tickLine={false} tickFormatter={formatXAxisTick} stroke='rgb(241, 156, 156)'fontSize={13} tickSize={10} />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={1}/>
       </LineChart>
    </div>
  )
}

AverageSessions.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
      sessionLength: PropTypes.number
    })
  )
}

export default AverageSessions