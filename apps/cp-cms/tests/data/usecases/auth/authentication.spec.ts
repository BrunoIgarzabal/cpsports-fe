import { fakerPT_BR as faker } from '@faker-js/faker'
import { HttpClientSpy } from '@cp/cms/tests/data/mocks/http-mock'
import { TAuthenticationParams } from '@cp/cms/@core/domain/usecases/auth'

import { Authentication } from '@cp/cms/@core/data/usecases/auth'

type Sut = {
  sut: Authentication
  httpClientSpy: HttpClientSpy<TAuthenticationParams>
}

const makeSut = (url: string = faker.internet.url()): Sut => {
  const httpClientSpy = new HttpClientSpy<TAuthenticationParams>()
  const sut = new Authentication(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('Authentication', () => {
  it('should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)

    const mockAuthenticationParams: TAuthenticationParams = {
      usernameOrEmail: faker.internet.userName(),
      password: faker.internet.password()
    }

    await sut.auth(mockAuthenticationParams)

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toBe(mockAuthenticationParams)
  })
})
