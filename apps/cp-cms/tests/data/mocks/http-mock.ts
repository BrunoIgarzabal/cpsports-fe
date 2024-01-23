import {
  HttpRequest,
  HttpClient,
  HttpResponse,
  HttpStatusCode
} from '@cp/cms/@core/data/protocols/http'

import { fakerPT_BR as faker } from '@faker-js/faker'

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: 'post',
  body: {},
  headers: {}
})

export class HttpClientSpy<R = any> implements HttpClient<R> {
  url?: string
  method?: string
  body?: any
  headers?: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url
    this.method = data.method
    this.body = data.body
    this.headers = data.headers
    return this.response
  }
}
