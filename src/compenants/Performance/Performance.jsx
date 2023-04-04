import {RadarChart,PolarGrid,PolarAngleAxis,Radar} from'recharts'
import './Performance.css'

function Performance({performance}) {
  const newData = performance.data.data.map(item => {
    return {kind: performance.data.kind[item.kind], value:item.value}
  })

  return (
      <RadarChart className='performanceContainer' outerRadius={90} width={300} height={300} data={newData}>
      <PolarGrid />
      <PolarAngleAxis dataKey='kind' style={{fontSize:'13px'}}/>
      <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
      </RadarChart>
  )
}

export default Performance