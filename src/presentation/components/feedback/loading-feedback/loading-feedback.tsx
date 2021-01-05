/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import * as S from './styles'

import { SpinnerDots } from '@/presentation/components/loaders'

type Props = {
  state: string
  message: string
  loader: ('spinner-dots')
}

export const LoadingFeedback: React.FC<Props> = (props: Props) => {
  const { loader, state, message } = props

  const chooseLoader = (): React.ReactElement => {
    switch (loader) {
      case 'spinner-dots':
        return <SpinnerDots visible={true} />
      default:
        return <SpinnerDots visible={true} />
    }
  }

  return (
    <>
      { state && (
        <S.WrapperFeedback>
          {state === 'success' && (
            <span>{message}</span>
          )}
          {state === 'error' && (
            <span>{message}</span>
          )}
          {state === 'loading' && (
            chooseLoader()
          )}
        </S.WrapperFeedback>
      )}
    </>
  )
}
