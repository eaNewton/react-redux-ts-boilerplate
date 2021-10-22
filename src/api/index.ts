import { API_URL } from 'constants/config'

const defaultContentType = 'application/json'

interface APIPayloadType {
  body: any
  cType?: string
  header?: any
  method: string
  path: string
  token?: string
}

export default async (payload: APIPayloadType) => {
  const { path, method, body, token, cType, header } = payload

  const url = `${API_URL}/${path}`
  const contentType = cType || defaultContentType

  const headers = {
    ...header,
    'Content-Type': `${contentType}`,
    Authorization: token ? `Bearer ${token}` : ``,
  }

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    })
    const responseBody = response.json()

    if (response.status !== 200) {
      throw new Error('Error fetching API')
    }

    return responseBody
  } catch (error) {
    throw Error(`${error}`)
  }
}
