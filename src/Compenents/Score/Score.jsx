import PropTypes from'prop-types'
import { PieChart,Pie,Cell } from 'recharts'
import './Score.css'

function Score({todayScore,newData}) {
    const COLORS = ['red', 'rgb(248, 248, 245)']

    return (
        <div className='scoreContainer' >
            <p id='score'>Score</p>
            <div style={{position:'relative',width:'200px',height:'200px'}} >
                <div style={{position:'absolute', zIndex:'100',top:'35%', left:'55%', transform:'translate(-50%, -50%'}} >
                    <p id='error-message-userScore' style={{textAlign:'center', fontSize:'15px', fontWeight:'bold'}} >{todayScore*100}%</p>
                    <p style={{textAlign:'center',fontSize:'12px',color:'grey',margin:'0'}}>de votre<br/> objectif</p>
                </div>
                <PieChart width={220} height={170}>
                    <Pie 
                        data={newData}
                        cx={105}
                        cy={65}
                        innerRadius={60} 
                        outerRadius={70} 
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
                        cx={105}
                        cy={65}
                        outerRadius={60}
                        fill='white'
                        dataKey='value'
                    />
                </PieChart>
            </div>
        </div>
    )
}

Score.propTypes = {
    todayScore: PropTypes.number
}

export default Score