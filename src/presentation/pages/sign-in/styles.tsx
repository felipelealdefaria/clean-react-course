import { styled } from '@/main/config/stitches.config'

export const Form = styled('form', {
  py: 40,
  width: '100%'
})

export const Link = styled('a', {
  my: 16,
  position: 'relative',
  fontSize: '12px',
  cursor: 'pointer',
  color: '#9177FA',

  '&:hover': {
    textDecoration: 'underline'
  }

})
