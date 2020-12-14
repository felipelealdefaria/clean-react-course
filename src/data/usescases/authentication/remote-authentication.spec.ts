/* eslint-disable @typescript-eslint/no-unused-vars */
import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClient } from '../../protocols/http/http-post-client'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }

    const url = 'http://'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy) // system under test - sut
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
