import React from 'react'
import { connect } from 'react-redux'

import Login from 'components/Login'

const LoginContainer = ({ dispatch }: any) => <Login dispatch={dispatch} />

const ReduxWrapped = connect()(LoginContainer)
export default ReduxWrapped
