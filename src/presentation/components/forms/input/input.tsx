/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import * as S from './styles'

type InputProps = {
  state?: any
  name: string
  type: string
  setState?: any
  placeholder: string
}

export const Input: React.FC<InputProps> = ({ state, setState, ...props }: InputProps) => {
  return (
    <S.WrapperInput>
      <input type="email" name="email" placeholder="Email" />
      <span>🔴</span>
    </S.WrapperInput>
  )
}
