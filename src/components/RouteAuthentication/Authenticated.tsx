import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

import { AuthType } from 'models/auth'

interface AuthenticatedRouteType {
  auth: AuthType
  component: any
  exact: boolean
  location: {
    pathname: string
    search: string
  }
  path: string
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteType> = ({
  component,
  location,
  exact,
  path,
  auth,
}) => {
  const renderComponent = () => {
    const { authenticated } = auth
    const C = component

    if (authenticated) return <C />

    const q = `${location.pathname}${location.search}`
    return <Redirect to={`/login?redirect=${q}`} />
  }

  return <Route exact={exact} path={path} render={() => renderComponent()} />
}

const WrappedComponent = withRouter<any, any>(AuthenticatedRoute)
export default WrappedComponent
