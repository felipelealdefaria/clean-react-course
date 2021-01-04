import { styled, css } from '@/main/config/stitches.config'

export default css.global({
  '*': {
    p: 0,
    m: 0
  },

  body: {
    m: 0,
    p: 0,
    bg: '$white',
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
  // bg: '$primary',
  bg: '$bg_light',
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
  br: 8,
  p: 40,
  bg: '$white',
  width: '80%',
  display: 'flex',
  alignSelf: 'center',
  flexDirection: 'column',
  boxShadow: '0px 1px 3px -1px $dark',

  md: {
    p: 40,
    width: 400
  },

  h2: {
    fontSize: 20,
    textAlign: 'center',
    color: '$primary_dark',
    textTransform: 'uppercase'
  },

  button: {
    br: 8,
    mt: 32,
    fontSize: 16,
    border: 'none',
    bg: '$primary',
    color: '$white',
    lineHeight: '60px',

    '&:hover': {
      opacity: 0.9
    }
  }
})

export const WrapperInput = styled('div', {
  mt: 16,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  input: {
    br: 4,
    py: 5,
    px: 10,
    width: '100%',
    lineHeight: '40px',
    border: '1px solid $primary_light',

    '&:focus': {
      outlineColor: '$primary_light'
    }
  },

  span: {
    fontSize: 12,
    right: '10px',
    cursor: 'help',
    position: 'absolute'
  }
})

export const Link = styled('a', {
  mt: 16,
  cursor: 'pointer',
  color: '$primary',
  textAlign: 'center',
  textTransform: 'lowercase',

  '&:hover': {
    textDecoration: 'underline'
  }

})

export const WrapperError = styled('div', {
  textAlign: 'center',

  span: {
    mt: 16,
    color: '$primary'
  },

  variants: {
    error: {
      true: {
        '> span': {
          display: 'block'
        }
      },
      false: {
        '> span': {
          display: 'none'
        }
      }
    }
  }
})

export const Footer = styled('div', {
  height: 48,
  // bg: '$primary'
  bg: '$bg_light'
})
