import { createLogger } from 'redux-logger'

const logger = createLogger({
  stateTransformer: (state) => {
    const newState: { [key: string]: any } = {}

    Object.keys(state).forEach((key) => {
      const stateItem = state[key]

      if (stateItem.logger) {
        newState[key] = stateItem.logger
      } else {
        newState[key] = stateItem
      }
    })

    return newState
  },
})

export default logger
