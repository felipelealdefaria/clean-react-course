import { styled, css } from '@/main/config/stitches.config'

const lds_ellipsis1 = css.keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(1)' }
})

const lds_ellipsis2 = css.keyframes({
  '0%': { transform: 'translate(0, 0)' },
  '100%': { transform: 'translate(24px, 0)' }
})

const lds_ellipsis3 = css.keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(0)' }
})

export const SpinnerDots = styled('div', {
  mt: 16,
  width: 80,
  height: 13,
  position: 'relative',
  display: 'inline-block',

  '> div': {
    br: '50%',
    width: '13px',
    height: '13px',
    position: 'absolute',
    animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)'
  },

  variants: {
    visible: {
      true: {
        display: 'inline-block'
      },
      false: {
        display: 'none'
      }
    },

    color: {
      default: {
        '> div': {
          bg: '$primary'
        }
      },
      blue: {
        '> div': {
          bg: 'blue'
        }
      }
    }
  },

  '> div:nth-child(1)': {
    left: '8px',
    animation: `${lds_ellipsis1} 0.6s infinite`
  },

  '> div:nth-child(2)': {
    left: '8px',
    animation: `${lds_ellipsis2} 0.6s infinite`
  },

  '> div:nth-child(3)': {
    left: '32px',
    animation: `${lds_ellipsis2} 0.6s infinite`
  },

  '> div:nth-child(4)': {
    left: '56px',
    animation: `${lds_ellipsis3} 0.6s infinite`
  }
})
