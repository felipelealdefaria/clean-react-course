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
