import { styled } from '@/main/config/stitches.config'

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
    mb: 40,
    mt: 16,
    fontSize: 16,
    color: '$white'
  }
})
