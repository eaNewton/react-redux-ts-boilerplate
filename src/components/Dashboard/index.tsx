import React, { useEffect, useState } from 'react'

import { deauthenticate } from 'actions/user'

import Button from 'components/Button'
import Dialogue from 'components/Dialogue'

import { UserType } from 'models/user'

interface DashboardPropsType {
  dispatch: (arg0: any) => void
  user: UserType
}

const Dashboard: React.FC<DashboardPropsType> = ({ dispatch, user }) => {
  const onDeauth = () => dispatch(deauthenticate())
  const [updatedUser, setUser] = useState(user)

  console.log('user whooooo', user)

  useEffect(() => {
    setUser(user)
  }, [user])

  return (
    <Dialogue className="dashboard">
      <h2>Dashboard</h2>
      <p>
        Welcome {updatedUser?.firstName} {updatedUser?.lastName}
      </p>
      <Button onClick={onDeauth} text="Logout" />
    </Dialogue>
  )
}

export default Dashboard
