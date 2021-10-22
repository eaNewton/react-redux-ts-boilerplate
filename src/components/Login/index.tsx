import React from 'react'

import { authenticateMock } from 'actions/user'

import Button from 'components/Button'
import Dialogue from 'components/Dialogue'

interface LoginPropsType {
  dispatch: (arg0: any) => void
}

const Login: React.FC<LoginPropsType> = ({ dispatch }) => {
  const onLogin = () => dispatch(authenticateMock())

  return (
    <Dialogue className="login">
      <h2>React + Redux TypeScript Boilerplate</h2>
      <Button onClick={onLogin} text="Login" />
    </Dialogue>
  )
}

export default Login
