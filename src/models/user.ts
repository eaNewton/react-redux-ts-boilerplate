import Auth, { AuthType, initialState as AuthInitialState } from './auth'

export interface UserType {
  auth: AuthType
  id: string
  firstName: string
  lastName: string
  email: string
}

const initialState = {
  auth: AuthInitialState,
  id: '',
  firstName: '',
  lastName: '',
  email: '',
}

const User = ({ auth, id, firstName, lastName, email }: UserType = initialState) => ({
  auth: Auth(auth),
  id,
  firstName,
  lastName,
  email,
})

export default User
