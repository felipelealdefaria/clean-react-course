import { styled, css } from '@/main/config/stitches.config'

export default css.global({
  body: {
    m: 0,
    p: 0,
    bg: '$light_grey',
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif'
  }
})

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
})

export const Header = styled('div', {
  bg: '$primary',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  borderTop: '40px solid $primary_dark',

  img: {
    mt: 40
  },

  h1: {
    fontSize: 18,
    color: '$white',
    m: '16px 0 40px 0'
  }
})

export const Form = styled('form', {
  height: '100%',
  bg: '$primary_light'
})

export const Footer = styled('div', {
  height: 48,
  bg: '$primary'
})
