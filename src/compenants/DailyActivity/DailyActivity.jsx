import {BarChart,CartesianGrid,XAxis,YAxis,Legend,Bar} from'recharts'
import './DailyActivity.css'

// transform the date from a full date to just the day
const dateTick = (tick) => {
  const date = new Date(tick)
  return date.getDate()
}


function DailyActivity({activity}) {

  // change the contenu of legend
  function CustomLegend({ value }) {
    let content;
    if (value === 'kilogram') {
      content = 'Poids (kg)';
    } else if (value === 'calories') {
      content = 'Calories brûlées (kCal)';
    }
    return <span style={{ fontSize: '12px' }}>{content}</span>;
  }

  function CustomLegendItem({ value, color }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '50px' }}>
        <div style={{ width: '10px', height: '10px', backgroundColor: color, marginRight: '5px', borderRadius: '50%' }}></div>
        <CustomLegend value={value} />
      </div>
    );
  }

  return (
    <div className='dailyActivity'>
      <p className='dailyActivityText' >Activité quotidienne</p>
        <BarChart width={950} height={250} data={activity?.data?.sessions} style={{marginLeft:'50px', position:'relative'}}>
        <CartesianGrid strokeDasharray= "3 3" vertical={false} />
        <XAxis dataKey="day" tickFormatter={dateTick} tickLine={false}/>
        <YAxis orientation="right" tickLine={false} axisLine={false}/>
        <Legend iconType='circle' 
                iconSize={10} 
                wrapperStyle={{
                    fontSize:'12px', 
                    position:'absolute', 
                    top:'-30px', 
                    left: '230px'}}
                    formatter={CustomLegend}
                    content={(props) => {
                      const { payload } = props;
                      return (
                        <div style={{ display: 'flex' ,marginLeft:'350px'}}>
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

export default DailyActivity