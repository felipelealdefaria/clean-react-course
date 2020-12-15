/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpResponse } from './http-response'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> { // T: Type (Body) | R: Response
  post (params: HttpPostParams<T>): Promise<HttpResponse<R>>
}
