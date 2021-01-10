/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer, useState } from 'react'

import * as S from './styles'
import { reducer, initialState } from './utils/login-reducer'
import { validateForm, validateField, ValidationProps } from '@/validation/login-validation/yup'
import { Input, ButtonSubmit, LoadingFeedback, LoginHeader, Footer } from '@/presentation/components'

type UserDataProps = {
  email: string
  password: string
}

export const Login: React.FC = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [disableButton, setDisableButton] = useState<boolean>(true)
  const [userData, setUserData] = useState<UserDataProps>({ email: '', password: '' })
  const [statusField, setStatusField] = useState<ValidationProps>({ valid: null, field: null, message: null })

  const onChangeValue = (value: string, name: string): void => {
    setUserData({ ...userData, [name]: value })
  }

  const onBlurValidation = async (name: string): Promise<void> => {
    const resField = await validateField(name, userData)
    setStatusField(resField)

    const resForm = await validateForm(userData)
    setDisableButton(!resForm.valid)
  }

  const handleSubmit = async (): Promise<any> => {
    dispatch({ type: 'loading', payload: '...' })
    const res = await validateForm(userData)

    return dispatch({
      type: res.valid ? 'success' : 'error',
      payload: res.valid ? 'We found your account!' : `${res?.message} || error`
    })
  }

  return (
    <S.Container>
      <LoginHeader />
      <S.Form>
        <h2>Login</h2>
        <Input
          required
          name='email'
          type='email'
          placeholder='E-mail'
          validate={statusField}
          onBlur={async () => onBlurValidation('email')}
          onChange={(e) => onChangeValue(e.target.value, 'email')}
        />
        <Input
          required
          name='password'
          type='password'
          placeholder='Password'
          validate={statusField}
          onBlur={async () => onBlurValidation('password')}
          onChange={(e) => onChangeValue(e.target.value, 'password')}
        />
        <ButtonSubmit
          type='button'
          text="Sign in"
          onClick={handleSubmit}
          disabled={disableButton}
        />
        <S.Link>Criar Conta</S.Link>
        <LoadingFeedback
          state={state}
          loaderColor={'default'}
          loader='spinner-dots'
        />
      </S.Form>
      <Footer />
    </S.Container>
  )
}
