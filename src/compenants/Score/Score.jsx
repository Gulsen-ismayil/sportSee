// import { ResponsiveContainer,RadialBarChart, RadialBar} from 'recharts'
import { PieChart,Pie,Cell } from 'recharts'
import './Score.css'

function Score({user}) {
    const newData = [
        {value: 12},
        {value: 88}
    ]
   
    const COLORS = ['red', 'rgb(248, 248, 245)']
console.log(newData[0].value)
    return (
        <div className='scoreContainer'>
            <p>Score</p>
            <div style={{position:'relative',width:'300px',height:'200px'}} >
                <div style={{position:'absolute', top:'50%', left:'40%', transform:'translate(-50%, -50%'}} >
                    <p style={{textAlign:'center', fontSize:'16px', fontWeight:'bold'}} >{user.data.todayScore*100}% de votre<br/> objectif</p>
                </div>
                <PieChart width={300} height={200}>
                {/* <defs>
                    <clipPath id="clip">
                    <rect x="0" y="0" width="100%" height="100%" rx="83" ry="83" />
                    </clipPath>
                </defs> */}
                <Pie 
                data={newData}
                cx={120}
                innerRadius={70} 
                outerRadius={83} 
                dataKey='value'
                startAngle={90}
                endAngle={-270}
                paddingAngle={0}
                fill='#8884d8'
                background={{fill:'white'}}
                strokeLinecap='round'
                cornerRadius={10}
                stroke="transparent"
                // clipPath='url(#clip)'
                >
                    {/* <circle cx={120} cy={100} r={70} fill='#fff'/> */}
                        {newData.map((entry,index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                </Pie>
                {/* <Pie
                    data={newData}
                    cx={120}
                    outerRadius={70}
                    fill='white'
                    dataKey='value'
                    shape={(props) => {
                    const { cx, cy, innerRadius} = props;
                    return (
                        <circle cx={cx} cy={cy} r={innerRadius} fill='white' />
                    );
                    }}
                /> */}
                </PieChart>
            </div>
        </div>
    )
}

export default Score