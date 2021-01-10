/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import * as S from './styles'

import { ValidationProps } from '@/validation/login-validation/yup'

type StatusResponse = {
  status: string
  span: JSX.Element
}

type Props = {
  validate: ValidationProps
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: React.FC<Props> = (props: Props) => {
  const { type, name, placeholder, validate, onChange, onBlur } = props

  const handleStatus = (): StatusResponse => {
    if (validate.valid === null) return { status: '', span: <>⚪️</> }
    if (validate.valid && validate.field === name) return { status: 'valid', span: <>🟢</> }
    return { status: 'invalid', span: <>🔴</> }
  }

  const { status, span } = handleStatus()

  return (
    <S.WrapperInput>
      <input
        type={type}
        name={name}
        onBlur={onBlur}
        className={status}
        onChange={onChange}
        placeholder={placeholder}
      />
      <span data-testid={`${name}-status`}>{span}</span>
      <div>
        {/* {validate?.message || ''} */}
      </div>
    </S.WrapperInput>
  )
}
