import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router'

import Dashboard from 'components/Dashboard'

import { UserType } from 'models/user'

type DashboardContainerPropsType = RouteComponentProps & {
  user: UserType
  dispatch: () => void
}

const mapStateToProps = (state: any) => {
  console.log('state: ', state)
  state.user.data
}

const DashboardContainer: React.FC<DashboardContainerPropsType> = ({ user, dispatch }) => {
  console.log('user???', user)

  return <Dashboard user={user} dispatch={dispatch} />
}

const ReduxWrapped = connect<any, any>(mapStateToProps)(DashboardContainer)
const RouterWrapped = withRouter(ReduxWrapped)
export default RouterWrapped
