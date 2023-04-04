// import { ResponsiveContainer,RadialBarChart, RadialBar} from 'recharts'
import { PieChart,Pie,Cell } from 'recharts'
import './Score.css'

function Score({user}) {
    const newData = [
        {value: 12},
        {value: 88}
    ]
   
    const COLORS = ['red', 'rgb(248, 248, 245)']
    return (
        <div className='scoreContainer'>
            <p>Score</p>
            <div style={{position:'relative',width:'300px',height:'300px'}} >
                <div style={{position:'absolute', zIndex:'100',top:'40%', left:'49%', transform:'translate(-50%, -50%'}} >
                    <p style={{textAlign:'center', fontSize:'15px', fontWeight:'bold'}} >{user.data.todayScore*100}%</p>
                    <p style={{textAlign:'center',fontSize:'12px',color:'grey'}}>de votre<br/> objectif</p>
                </div>
                <PieChart width={300} height={300}>
                <Pie 
                data={newData}
                cx={150}
                cy={110}
                innerRadius={90} 
                outerRadius={103} 
                dataKey='value'
                startAngle={90}
                endAngle={-270}
                paddingAngle={0}
                fill='#8884d8'
                background={{fill:'white'}}
                strokeLinecap='round'
                cornerRadius={10}
                stroke="transparent"
                >
                    {newData.map((entry,index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Pie
                    data={newData}
                    cx={150}
                    cy={110}
                    outerRadius={90}
                    fill='white'
                    dataKey='value'
                />
                </PieChart>
            </div>
        </div>
    )
}

export default Score