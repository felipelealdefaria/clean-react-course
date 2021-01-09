import React, { useReducer, useState } from 'react'

import * as S from './styles'
import { isValid } from '@/validation/login-validation/yup'
import { reducer, initialState } from './utils/login-reducer'
import { Input, ButtonSubmit, LoadingFeedback, LoginHeader, Footer } from '@/presentation/components'

type UserDataProps = {
  email: string
  password: string
}

export const Login: React.FC = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [disableButton] = useState<boolean>(true)
  const [userData, setUserData] = useState<UserDataProps>({ email: '', password: '' })

  const onChangeValue = (value: string, name: string): void => {
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = async (): Promise<any> => {
    const { email, password } = userData
    dispatch({ type: 'loading', payload: '...' })

    const res = await isValid({ email: email, password: password })

    return dispatch({
      type: res?.valid ? 'success' : 'error',
      payload: res?.valid
        ? 'We found your account! In the next few seconds, you’ll be taken to the app'
        : `${res?.message}`
    })
  }

  return (
    <S.Container>
      <LoginHeader />
      <S.Form>
        <h2>Login</h2>
        <Input
          name='email'
          type='email'
          required={true}
          placeholder='E-mail'
          onChange={
            (e) =>
              onChangeValue(e.target.value, 'email')
          }
        />
        <Input
          name='password'
          type='password'
          required={true}
          placeholder='Password'
          onChange={
            (e) =>
              onChangeValue(e.target.value, 'password')
          }
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
