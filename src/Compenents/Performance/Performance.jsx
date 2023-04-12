import PropTypes from'prop-types'
import {RadarChart,PolarGrid,PolarAngleAxis,Radar} from'recharts'
import './Performance.css'

function Performance({performance}) {
  // create new data that has the same format as the example in Rechars
  const newData = performance.data.map(item => {
    return {kind: performance.kind[item.kind], value:item.value}
  })

  return (
    <div>
      <RadarChart className='performanceContainer' outerRadius={70} width={220} height={220} data={newData}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' style={{fontSize:'9px'}}/>
          <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
      </RadarChart>
      <div id='error-message-performance'></div>
    </div>
  )
}

Performance.propTypes = {
  performance: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      kind: PropTypes.number,
      value: PropTypes.number
    })),
    kind: PropTypes.objectOf(PropTypes.string)
  })
}

export default Performance