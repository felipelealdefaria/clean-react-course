import React from 'react'
import * as S from './styles'

type Props =
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement>

export const Input: React.FC<Props> = (props: Props) => {
  const { type, name, required, placeholder, onChange } = props

  return (
    <S.WrapperInput>
      <input
        type={type}
        name={name}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
      <span data-testid={`${name}-status`}>🔴</span>
    </S.WrapperInput>
  )
}
