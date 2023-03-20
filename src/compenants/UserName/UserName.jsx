function UserName ({user}) {
  console.log(user)
  return (
    <div>
      <h1>Bonjour {' '}
          <span style={{color:'red'}}>
            {user.data.userInfos.firstName}
          </span>
      </h1>
    </div>
  )
}

export default UserName