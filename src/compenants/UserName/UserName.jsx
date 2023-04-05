import './UserName.css'

function UserName ({user}) {

  return (
    <div className="userName">
        <h1>Bonjour {' '}
            <span style={{color:'red'}}>
                {user?.data?.userInfos?.firstName}
            </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
    </div>
  )
}

export default UserName