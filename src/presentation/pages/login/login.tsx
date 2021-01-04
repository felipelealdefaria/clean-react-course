import React from 'react'
import * as S from './styles'
import { Logo } from '@/presentation/assets/images'
import { SpinnerDots } from '@/presentation/components/loaders'
// import { Input } from '@/presentation/components/input'
// import { ButtonSubmit } from '@/presentation/components/buttons'

export const Login: React.FC = () => {
  const state = false
  return (
    <S.Container>
      <S.Header>
        <Logo />
        <h1>Clean Architecture Course</h1>
      </S.Header>
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
          <SpinnerDots visible={false} />
          <span>Error</span>
        </S.WrapperError>
      </S.Form>
      <S.Footer></S.Footer>
    </S.Container>
  )
}
