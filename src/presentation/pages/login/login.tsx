import React, { useReducer, useState } from 'react'
import * as S from './styles'

import { reducer, initialState } from './login-reducer'

import { Input } from '@/presentation/components/forms/input'
import { ButtonSubmit } from '@/presentation/components/forms/buttons'
import { LoadingFeedback } from '@/presentation/components/feedback'
import { LoginHeader, Footer } from '@/presentation/components/layout'

export const Login: React.FC = (): any => {
  const [userData, setUserData] = useState({ email: '', password: '' })
  const [state, dispatch] = useReducer(reducer, initialState)

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

      return dispatch({ type: 'error', payload: 'Todos os campos precisam estar preenchidos' })
    }, 2000)
  }

  return (
    <S.Container>
      <LoginHeader />
      <S.Form>
        <h2>Login</h2>
        <Input onChange={(e) => onChangeValue(e.target.value, 'email')} name='email' type='email' placeholder='E-mail' required={true} />
        <Input onChange={(e) => onChangeValue(e.target.value, 'password')} name='password' type='password' placeholder='Password' required={true} />
        <ButtonSubmit
          type='button'
          text="Sign in"
          onClick={handleSubmit}
          state={{ isFormInvalid: false }}
        />
        <S.Link>Criar Conta</S.Link>
        <LoadingFeedback state={state.status} message={state.message} loader='spinner-dots' />
      </S.Form>
      <Footer />
    </S.Container>
  )
}
