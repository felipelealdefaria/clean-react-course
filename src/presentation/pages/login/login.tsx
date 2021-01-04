import React from 'react'
import * as S from './styles'
import { SpinnerDots } from '@/presentation/components/loaders'
import { Footer } from '@/presentation/components/layout/footer'
import { LoginHeader } from '@/presentation/components/layout/header'
// import { Input } from '@/presentation/components/input'
// import { ButtonSubmit } from '@/presentation/components/buttons'

export const Login: React.FC = () => {
  const state = true
  return (
    <S.Container>
      <LoginHeader />
      <S.Form>
        <h2>Login</h2>
        {/* <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" /> */}
        <S.WrapperInput>
          <input type="email" name="email" placeholder="Email" />
          <span>🔴</span>
        </S.WrapperInput>
        <S.WrapperInput>
          <input type="password" name="password" placeholder="Password" />
          <span>🔴</span>
        </S.WrapperInput>
        {/* <ButtonSubmit state={'teste'} text='Sign in'/> */}
        <button type='submit'>Sign in</button>
        <S.Link>Criar Conta</S.Link>
        <S.WrapperError error={state ? 'true' : 'false'}>
          <SpinnerDots visible={true} />
          <span>Error</span>
        </S.WrapperError>
      </S.Form>
      <Footer />
    </S.Container>
  )
}
