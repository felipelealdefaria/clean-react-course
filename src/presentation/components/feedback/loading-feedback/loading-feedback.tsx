/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import * as S from './styles'

import { FeedbackParams } from '@/presentation/pages/login/utils'
import { SpinnerDots } from '@/presentation/components/loaders'

type Props = {
  state: FeedbackParams
  loader: ('spinner-dots')
  loaderColor?: ('blue' | 'default')
}

export const LoadingFeedback: React.FC<Props> = (props: Props) => {
  const { loader, state, loaderColor } = props

  const chooseLoader = (): React.ReactElement => {
    switch (loader) {
      case 'spinner-dots':
        return <SpinnerDots color={loaderColor} visible={true} />
      default:
        return <SpinnerDots color={loaderColor} visible={true} />
    }
  }

  return (
    <>
      { state && (
        <S.WrapperFeedback data-testid='error-wrap'>
          {state.status === 'success' && (
            <span className="success">
              {state.message}
            </span>
          )}
          {state.status === 'error' && (
            <span className="error">
              {state.message}
            </span>
          )}
          {state.status === 'loading' && (
            chooseLoader()
          )}
        </S.WrapperFeedback>
      )}
    </>
  )
}
