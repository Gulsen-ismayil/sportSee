function UserName ({user}) {
  console.log(user)
  return (
    <div>
      <h1>Bonjour {' '}
          <span style={{color:'red'}}>
            {user?.data?.userInfos?.firstName}
          </span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier </p>
    </div>
  )
}

export default UserName