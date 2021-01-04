import { styled } from '@/main/config/stitches.config'

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
    fontSize: 10,
    right: '10px',
    cursor: 'help',
    position: 'absolute'
  }
})
