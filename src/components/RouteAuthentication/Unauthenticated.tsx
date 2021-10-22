import React from 'react'
import { withRouter, Redirect } from 'react-router'
import { Route } from 'react-router-dom'

import { AuthType } from 'models/auth'

const QueryParams = require('query-params')

interface UnauthenticatedRouteType {
  auth: AuthType
  component: any
  exact: boolean
  location: {
    search: {
      replace: (arg0: any, arg1: string) => any
    }
  }
  path: string
}

const UnauthenticatedRoute: React.FC<UnauthenticatedRouteType> = ({
  component,
  location,
  exact,
  path,
  auth,
}) => {
  const { decode } = QueryParams
  const queryString = (name: string) => {
    if (location && location.search) {
      const params = decode(location.search.replace(/\?/g, ''))
      return params[name]
    }

    return null
  }

  const renderComponent = () => {
    const { authenticated } = auth
    const redirect = queryString('redirect')

    const C = component
    if (!authenticated) return <C />

    return <Redirect to={redirect && redirect !== '' ? redirect : '/'} />
  }

  return <Route exact={exact} path={path} render={() => renderComponent()} />
}

const WrappedComponent = withRouter<any, any>(UnauthenticatedRoute)
export default WrappedComponent
