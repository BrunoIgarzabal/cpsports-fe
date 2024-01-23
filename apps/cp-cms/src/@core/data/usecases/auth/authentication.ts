import {
  TAuthenticationParams,
  IAuthentication
} from '@cp/cms/@core/domain/usecases/auth'

import { HttpClient } from '@cp/cms/@core/data/protocols/http'

export class Authentication implements IAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<TAuthenticationParams>
  ) {}

  async auth(params: TAuthenticationParams): Promise<string> {
    const response = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })

    return ''
  }
}
