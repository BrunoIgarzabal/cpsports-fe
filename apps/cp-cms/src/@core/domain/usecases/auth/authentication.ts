export type TAuthenticationParams = {
  usernameOrEmail: string
  password: string
}

export type TAuthenticationModel = {
  accessToken: string
}

export interface IAuthentication {
  auth(params: TAuthenticationParams): Promise<string>
}
