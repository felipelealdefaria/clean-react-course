import React, { useReducer, useState } from 'react'

import * as S from './styles'
import { reducer, initialState } from './utils/login-reducer'
import { Input, ButtonSubmit, LoadingFeedback, LoginHeader, Footer } from '@/presentation/components'

type UserDataProps = {
  email: string
  password: string
}

export const Login: React.FC = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [userData, setUserData] = useState<UserDataProps>()

  const onChangeValue = (value: string, name: string): void => {
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (): void => {
    const { email, password } = userData
    dispatch({ type: 'loading', payload: '...' })

    setTimeout(() => {
      if (email && password) {
        dispatch({ type: 'success', payload: 'Sucesso!' })
        return console.log(userData)
      }

      return dispatch({
        type: 'error',
        payload: 'Todos os campos precisam estar preenchidos'
      })
    }, 2000)
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
          state={{ isFormInvalid: false }}
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
