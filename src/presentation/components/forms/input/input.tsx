/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import * as S from './styles'

type InputProps = {
  state?: any
  name: string
  type: string
  onChange: any
  setState?: any
  required?: any
  placeholder: string
}

export const Input: React.FC<InputProps> = ({ state, setState, ...props }: InputProps) => {
  return (
    <S.WrapperInput>
      <input onChange={props.onChange} type="email" name="email" placeholder="Email" required={false} />
      <span>🔴</span>
    </S.WrapperInput>
  )
}
