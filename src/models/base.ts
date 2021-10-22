interface BaseType {
  loading: boolean
  errorMessage: string
  data: any
}

const initialState: BaseType = {
  loading: false,
  errorMessage: '',
  data: {},
}

const Base = ({ loading, errorMessage, data }: BaseType = initialState) => ({
  loading,
  errorMessage,
  data,
})

export default Base
