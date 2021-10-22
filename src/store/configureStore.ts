import ConfigureStoreProd from './configureStore.prod'
import ConfigureStoreDev from './configureStore.dev'

const ConfigureStore =
  process.env.NODE_ENV === 'production' ? ConfigureStoreProd : ConfigureStoreDev

export default ConfigureStore
