import api from 'api'

export const USER_ASYNC_START = 'USER_ASYNC_START'
export const USER_ASYNC_FAIL = 'USER_ASYNC_FAIL'
export const USER_ASYNC_SUCCESS = 'USER_ASYNC_SUCCESS'
export const USER_ACTION_SUCCESS = 'USER_ACTION_SUCCESS'

function userAsyncStart() {
  return {
    type: USER_ASYNC_START,
  }
}

function userAsyncFail(errorMessage: string) {
  return {
    type: USER_ASYNC_FAIL,
    errorMessage,
  }
}

export function userAsyncSuccess(data: any) {
  return {
    type: USER_ASYNC_SUCCESS,
    data,
  }
}

export function userActionSuccess(data: any) {
  return {
    type: USER_ACTION_SUCCESS,
    data,
  }
}

export const authenticate = (email: string, password: string) => {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(userAsyncStart())
    try {
      const response = await api({
        path: 'authenticate',
        method: 'POST',
        body: { email, password },
      })
      dispatch(userAsyncSuccess(response))
      return response
    } catch (error: any) {
      dispatch(userAsyncFail(error))
      return null
    }
  }
}

export const deauthenticate = () => {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(userActionSuccess({}))
  }
}

export const authenticateMock = () => {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(
      userActionSuccess({
        auth: {
          authenticated: true,
          expiresIn: '',
          token: 'test-token',
        },
        id: 1,
        firstName: 'Test',
        lastName: 'User',
        email: 'test.user@gmail.com',
      }),
    )
  }
}
