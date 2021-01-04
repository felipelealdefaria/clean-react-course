import React from 'react'
import * as S from './styles'

import { Input } from '@/presentation/components/forms/input'
import { SpinnerDots } from '@/presentation/components/loaders'
import { Footer } from '@/presentation/components/layout/footer'
import { LoginHeader } from '@/presentation/components/layout/header'
// import { ButtonSubmit } from '@/presentation/components/forms/buttons'

export const Login: React.FC = () => {
  const state = true
  return (
    <S.Container>
      <LoginHeader />
      <S.Form>
        <h2>Login</h2>
        <Input name='email' type='email' placeholder='E-mail' />
        <Input name='password' type='password' placeholder='Password' />
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
