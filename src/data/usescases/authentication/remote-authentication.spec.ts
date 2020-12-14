/* eslint-disable @typescript-eslint/no-unused-vars */
import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-http-client'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'http://'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy) // system under test - sut
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
