import React from 'react'
import * as S from './login-styles'
// import { Input } from '@/presentation/components/input'
import { ButtonSubmit } from '@/presentation/components/buttons'

const Login: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <img src="data:image/png;base64,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" title="Felipe Leal - Personal Website" alt="Felipe Leal - Personal Website" />
        <h1>Clean Architecture Course</h1>
      </S.Header>
      <S.Form>
        <h2>Login</h2>
        {/* <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" /> */}
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <ButtonSubmit state={'teste'} text='Sign in'/>
      </S.Form>
      <S.Footer></S.Footer>
    </S.Container>
  )
}

export default Login
