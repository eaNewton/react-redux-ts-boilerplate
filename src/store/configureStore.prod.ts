import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from 'reducers'

const persistConfig = {
  key: 'root',
  whitelist: ['auth', 'user'],
  storage,
}

const enhancer = compose(applyMiddleware(createDebounce(), thunk))

export default function configureStore(initialState: any) {
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, initialState, enhancer)
  const persistor = persistStore(store)
  return { store, persistor }
}
