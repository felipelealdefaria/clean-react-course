import React from 'react'
import * as S from './styles'

import { Logo } from '@/presentation/assets/images'

const Header: React.FC = () => {
  return (
    <S.Header>
      <Logo />
      <h1>Clean Architecture Course</h1>
    </S.Header>
  )
}

export const LoginHeader = React.memo(Header)
