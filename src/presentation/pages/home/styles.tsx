
import { styled, css } from '@/main/config/stitches.config'

const fadein = css.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const fadeout = css.keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
})

export const Container = styled('div', {
  width: '100%',
  height: '100vh',
  position: 'relative',

  backgroundSize: 'cover',
  backgroundColor: '#c2c2c2',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'url(https://picsum.photos/1280/1000?grayscale=2.webp)',
  // backgroundImage: 'url(https://picsum.photos/1280/1000.webp)',

  animation: `${fadein} 4s`,
  transition: 'all .1s ease',

  '-o-animation': `${fadein} 4s`, /* Opera */
  '-moz-animation': `${fadein} 4s`, /* Firefox */
  '-ms-animation': `${fadein} 4s`, /* Internet Explorer */
  '-webkit-animation': `${fadein} 4s` /* Safari and Chrome */
})

export const WrapperCard = styled('div', {
  position: 'absolute',

  variants: {
    color: {
      open: {
        top: 0,
        left: 0,
        width: 600,
        height: '100vh',
        borderRadius: '0px',
        bg: 'rgb(255 255 255 / 95%)',
        transition: 'all .8s ease-in'
      },
      closed: {
        top: '25%',
        width: 450,
        height: 500,
        borderRadius: 20,
        bg: 'rgb(255 255 255 / 85%)',
        transition: 'all .8s ease-out',
        left: 'calc((100vw - 50%) - 225px);'
      }
    }
  }
})

export const WrapperButtons = styled('div', {
  height: '100%',
  display: 'flex',
  padding: '0 80px',
  textAlign: 'center',
  flexDirection: 'column',
  animation: `${fadein} 4s`,
  transition: 'all .1s ease',
  justifyContent: 'space-around',

  '-o-animation': `${fadein} 4s`, /* Opera */
  '-moz-animation': `${fadein} 4s`, /* Firefox */
  '-ms-animation': `${fadein} 4s`, /* Internet Explorer */
  '-webkit-animation': `${fadein} 4s`, /* Safari and Chrome */

  '&.not-visible': {
    display: 'none',
    animation: `${fadeout} 2s`,

    '-o-animation': `${fadeout} 2s`, /* Opera */
    '-moz-animation': `${fadeout} 2s`, /* Firefox */
    '-ms-animation': `${fadeout} 2s`, /* Internet Explorer */
    '-webkit-animation': `${fadeout} 2s` /* Safari and Chrome */
  },

  h2: {
    mb: '35px',
    fontWeight: 400,
    fontSize: '22px'
  }
})

export const WrapperForms = styled('div', {
  height: '100%',
  display: 'flex',
  padding: '0px 80px',
  flexDirection: 'column',
  justifyContent: 'space-around',

  animation: `${fadein} 4s`,
  transition: 'all .1s ease',

  '-o-animation': `${fadein} 4s`, /* Opera */
  '-moz-animation': `${fadein} 4s`, /* Firefox */
  '-ms-animation': `${fadein} 4s`, /* Internet Explorer */
  '-webkit-animation': `${fadein} 4s`, /* Safari and Chrome */

  '&.not-visible': {
    display: 'none',
    animation: `${fadeout} 2s`,

    '-o-animation': `${fadeout} 2s`, /* Opera */
    '-moz-animation': `${fadeout} 2s`, /* Firefox */
    '-ms-animation': `${fadeout} 2s`, /* Internet Explorer */
    '-webkit-animation': `${fadeout} 2s` /* Safari and Chrome */
  }
})

export const WrapperHeader = styled('div', {
  textAlign: 'center',
  span: {
    mt: '75px',
    display: 'block',
    fontSize: '18px',
    padding: '0px 40px'
  }
})
