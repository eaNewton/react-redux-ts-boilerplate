export interface AuthType {
  authenticated: boolean
  token: string
  expiresIn: string
}

export const initialState: AuthType = {
  authenticated: false,
  token: '',
  expiresIn: '',
}

const Auth = ({ authenticated, token, expiresIn }: AuthType = initialState) => ({
  authenticated,
  token,
  expiresIn,
})

export default Auth
