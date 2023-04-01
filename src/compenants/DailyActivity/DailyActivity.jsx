import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from'recharts'
import './DailyActivity.css'


const dateTick = (tick) => {
  const date = new Date(tick)

  return date.getDate()
}

function DailyActivity({activity}) {

  // console.log(activity)
  return (
    <div className='dailyActivity'>
      <p>Activité quotidienne</p>
        <BarChart width={730} height={250} data={activity?.data?.sessions}>
        <CartesianGrid strokeDasharray= "3 3" vertical={false} />
        <XAxis dataKey="day" tickFormatter={dateTick} tickLine={false}/>
        <YAxis orientation="right" tickLine={false} axisLine={false}/>
        <Tooltip/>
        <Legend iconType='circle' />
        <Bar dataKey="kilogram" fill="black" radius={[15,15,0,0]} barSize={10} />
        <Bar dataKey="calories" fill="red" radius={[15,15,0,0]} barSize={10} />
        </BarChart>
    </div>
  )
}

export default DailyActivity