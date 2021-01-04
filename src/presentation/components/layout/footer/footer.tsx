import React from 'react'
import * as S from './styles'

const LayoutFooter: React.FC = () => {
  return (
    <S.Footer />
  )
}

export const Footer = React.memo(LayoutFooter)
