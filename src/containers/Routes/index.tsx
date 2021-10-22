import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import routeCodes from 'constants/routeCodes'
import AsyncComponentHOC from 'components/HOC/AsyncComponentHOC'
import AuthenticatedRoute from 'components/RouteAuthentication/Authenticated'
import UnauthenticatedRoute from 'components/RouteAuthentication/Unauthenticated'

import App from 'containers/App'

import { AuthType } from 'models/auth'

const AsyncLogin = AsyncComponentHOC(() => import('containers/Login'))
const AsyncNotFound = AsyncComponentHOC(() => import('containers/NotFound'))
const AsyncDashboard = AsyncComponentHOC(() => import('containers/Dashboard'))

interface RoutesContainerProps {
  auth: AuthType
}

const mapStateToProps = (state: any) => ({
  auth: state.user.data.auth,
})

const RoutesContainer = ({ auth }: RoutesContainerProps) => (
  <Router>
    <App>
      <Switch>
        <AuthenticatedRoute path={routeCodes.INDEX} exact component={AsyncDashboard} auth={auth} />
        <UnauthenticatedRoute path={routeCodes.LOGIN} exact component={AsyncLogin} auth={auth} />
        <Route component={AsyncNotFound} />
      </Switch>
    </App>
  </Router>
)

const Routes = connect(mapStateToProps)(RoutesContainer)

export default Routes
