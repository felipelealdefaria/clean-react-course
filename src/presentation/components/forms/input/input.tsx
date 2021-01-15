/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import * as S from './styles'

import { ValidationProps } from '@/validation/yup-validation'

type StatusResponse = {
  status: string
  message?: string
  span: JSX.Element
}

type Props = {
  validate: ValidationProps[]
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: React.FC<Props> = (props: Props) => {
  const { type, name, placeholder, validate, onChange, onBlur } = props

  const handleStatus = (): StatusResponse => {
    const statusField = validate.find(el => el.field === name)

    if (!statusField || statusField.valid === null) return { status: '', span: <>⚪️</> }
    if (statusField.valid && statusField.field === name) return { status: 'valid', span: <>🟢</> }
    return { status: 'invalid', span: <>🔴</>, message: statusField.message }
  }

  const { status, span, message } = handleStatus()

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
      <S.ErrorField>{message || ''}</S.ErrorField>
    </S.WrapperInput>
  )
}
