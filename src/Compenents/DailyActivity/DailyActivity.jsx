import PropTypes from'prop-types'
import {BarChart,CartesianGrid,XAxis,YAxis,Legend,Bar} from'recharts'
import './DailyActivity.css'

/**
 * 
 * @param {string} tick - the tick value representing the data 
 * @returns {number} - the day of the date
 */
const dateTick = (tick) => {
    const date = new Date(tick)
    return date.getDate()
}

/**
 * @component
 * @param {object[]} sessions - an array of objects reprenting daily activity sessions
 * @param {string} sessions[].day - the day of the activity session
 * @param {number} sessions[].kilogram - the weight in kilograms for the activity sesssion
 * @param {number} sessions[].calories - the calories burned for the activity session
 * @returns - rendered dailyActivity component
 */

function DailyActivity({sessions}) {

/**
 * 
 * @param {string} value - the value of the legend 
 * @returns - rendered customLegend component 
 */
  function CustomLegend({ value }) {
      let content;
      if (value === 'kilogram') {
        content = 'Poids (kg)';
      } else if (value === 'calories') {
        content = 'Calories brûlées (kCal)';
      }
      return <span style={{ fontSize: '12px' }}>{content}</span>;
  }

/**
 * @param {string} value - the value of the legend item
 * @param {string} color - the color of the legend item
 * @returns -rendered cunstomLegendItem component 
 */
  function CustomLegendItem({ value,color}) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '50px' }}>
        <div style={{ width: '10px', height: '10px',backgroundColor: color, marginRight: '5px', borderRadius: '50%' }}></div>
        <CustomLegend value={value} />
      </div>
    );
  }

  // PropTypes for CustomLegendItem component 
  CustomLegendItem.propTypes = {
    value: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }

  return (
    
    <div className='dailyActivity' id='error-message-dailyActivity'>
      <p className='dailyActivityText' >Activité quotidienne</p>
        <BarChart width={650} height={140} data={sessions} style={{marginLeft:'30px', position:'relative'}}> 
        <CartesianGrid strokeDasharray= "3 3" vertical={false} />
        <XAxis dataKey="day" tickFormatter={dateTick} tickLine={false}/>
        <YAxis orientation="right" tickLine={false} axisLine={false}/>
            <Legend iconType='circle' 
                    iconSize={5} 
                    wrapperStyle={{
                        fontSize:'5px', 
                        position:'absolute', 
                        top:'-40px', 
                        left: '230px'}}
                        formatter={CustomLegend}
                        content={(props) => {
                          const { payload } = props;
                          return (
                            <div style={{ display: 'flex' ,marginLeft:'10px'}}>
                              {
                                payload.map((entry, index) => (
                                  <CustomLegendItem key={`item-${index}`} value={entry.value} color={entry.color} />
                                ))
                              }
                            </div>
                          )
                        }}     
            />
            <Bar dataKey="kilogram" fill="black" radius={[15,15,0,0]} barSize={10} />
            <Bar dataKey="calories" fill="red" radius={[15,15,0,0]} barSize={10} />
        </BarChart>
    </div>
  )
}

// Define propTypes for DailyActivity component
DailyActivity.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
      kilogram:PropTypes.number,
      calories:PropTypes.number
    })
  )
}


export default DailyActivity