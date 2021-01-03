/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react'
import * as S from './styles'

type InputProps = {
  name: string
  type: string
  placeholder: string
  state?: any
  setState?: any
}

export const Input: React.FC<InputProps> = ({ state, setState, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${props.name}Error`]
  return (
    <S.Container data-testid={`${props.name}-wrap`} data-status={error ? 'invalid' : 'valid'}>
      <input
        {...props}
        ref={inputRef}
        title={error}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={e => { e.target.readOnly = false }}
        onChange={e => { setState({ ...state, [e.target.name]: e.target.value }) }}
      />
      <label data-testid={`${props.name}-label`} onClick={() => { inputRef.current.focus() }} title={error}>
        {props.placeholder}
      </label>
    </S.Container>
  )
}
