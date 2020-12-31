/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { HttpPostParams } from '@/data/protocols/http'

export class AxiosHttpClient {
  async post (params: HttpPostParams<any>): Promise<any> {
    await axios.post(params.url, params.body)
  }
}
