import {RadarChart,PolarGrid,PolarAngleAxis,Radar} from'recharts'
import './Performance.css'

function Performance({performance}) {
const subject = Object.values(performance?.data?.kind)
const subjectKind = subject.map((sub,index) => ({sub,id:index}))
console.log(subjectKind)
  return (
    // <div></div>
      <RadarChart className='performanceContainer'  outerRadius={90} width={230} height={250} data={performance?.data?.data}>
      <PolarGrid />
      <PolarAngleAxis data={subjectKind} dataKey='sub' />
      <Radar name="ggg" dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
      </RadarChart>
  )
}

export default Performance