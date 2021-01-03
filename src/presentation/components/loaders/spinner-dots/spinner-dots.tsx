/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import * as S from './styles'

type SpinnerDotsProps = {
  visible: boolean
  color?: ('blue' | 'default')
}

export const SpinnerDots: React.FC<SpinnerDotsProps> = ({ color, visible }: SpinnerDotsProps) => {
  return (
    <S.SpinnerDots
      color={color || 'default'}
      visible={visible ? 'true' : 'false'}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </S.SpinnerDots>
  )
}
