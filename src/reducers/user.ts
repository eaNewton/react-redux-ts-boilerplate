import produce from 'immer'
import Base from 'models/base'
import User from 'models/user'

import {
  USER_ASYNC_START,
  USER_ASYNC_FAIL,
  USER_ASYNC_SUCCESS,
  USER_ACTION_SUCCESS,
} from 'actions/user'

export const initialState = Base({
  data: User(),
  loading: false,
  errorMessage: '',
})

/* eslint-disable no-param-reassign */
const actionsMap: any = {
  [USER_ASYNC_START]: (state: any) => {
    const nextState = produce(state, (draft: any) => {
      draft.loading = true
      draft.errorMessage = ''
    })
    return nextState
  },
  [USER_ASYNC_SUCCESS]: (state: any, action: any) => {
    const nextState = produce(state, (draft: any) => {
      draft.loading = false
      draft.errorMessage = ''
      draft.data = User(action.data)
    })
    return nextState
  },
  [USER_ASYNC_FAIL]: (state: any, action: any) => {
    const nextState = produce(state, (draft: any) => {
      draft.loading = false
      draft.errorMessage = action.errorMessage
    })
    return nextState
  },
  [USER_ACTION_SUCCESS]: (state: any, action: any) => {
    const nextState = produce(state, (draft: any) => {
      draft.data = User(action.data)
    })
    return nextState
  },
}
/* eslint-enable no-param-reassign */

export default function user(
  state = initialState,
  action: { type: string; data?: any } = { type: '' },
) {
  const fn = actionsMap[action.type]
  return fn ? fn(state, action) : state
}
