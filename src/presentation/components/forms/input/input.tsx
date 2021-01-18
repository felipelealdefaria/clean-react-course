/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import * as S from './styles'

import { validateField } from '@/validation/yup-validation'

type StatusResponse = {
  status: string
  message?: string
  span: JSX.Element
}

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: React.FC<Props> = (props: Props) => {
  const [statusField, setStatusField] = useState<StatusResponse>({ status: '', span: <>⚪️</>, message: '' })
  const { value, type, name, placeholder, onChange, onBlur } = props

  // lembrar de mockar essa funcao
  const handleStatus = async (): Promise<void> => {
    const validate = await validateField(name, { [name]: value })

    validate.valid && validate.field === name
      ? setStatusField({ status: 'valid', span: <>🟢</> })
      : setStatusField({ status: 'invalid', span: <>🔴</>, message: validate.message })
  }

  const { status, span, message } = statusField

  return (
    <S.WrapperInput>
      <input
        type={type}
        name={name}
        value={value}
        className={status}
        onChange={onChange}
        // onBlur={async (e) => {
        //   onBlur && onBlur(e)
        // await handleStatus()
        // }}
        placeholder={placeholder}
        data-testid={`${name}-input`}
      />
      <span data-testid={`${name}-status`}>{span}</span>
      <S.ErrorField data-testid={`${name}-error`}>{message || ''}</S.ErrorField>
    </S.WrapperInput>
  )
}
