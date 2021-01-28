export interface FeedbackParams {
  message: string
  status: ('success' | 'error' | 'loading')
}

export type Action =
  | { type: 'error', payload: string }
  | { type: 'success', payload: string }
  | { type: 'loading', payload: string }

export const initialState: FeedbackParams = {
  status: null,
  message: null
}

export function reducer (state: FeedbackParams, action: Action): FeedbackParams {
  switch (action.type) {
    case 'error':
      return { ...state, status: action.type, message: action.payload }
    case 'loading':
      return { ...state, status: action.type, message: action.payload }
    case 'success':
      return { ...state, status: action.type, message: action.payload }
    default:
      return state
  }
}
