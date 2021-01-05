import { styled } from '@/main/config/stitches.config'

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
