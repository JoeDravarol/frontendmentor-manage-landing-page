import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

import Container from './Container'
import CtaButton from '../components/CtaButton'
import mobileBackgroundPattern from '../images/bg-simplify-section-mobile.svg'
import desktopBackgroundPattern from '../images/bg-simplify-section-desktop.svg'
import { useWindowSize } from '../hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    width: '100%',
    minHeight: 450,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: `url(${mobileBackgroundPattern})`,
      position: 'absolute',
      top: '50%',
      bottom: 0,
      left: 0,
      right: 0,
      transform: 'translate(0, -50%)'
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: 300,
      '&::after': {
        content: `url(${desktopBackgroundPattern})`,
        top: '-5%',
        transform: 'translate(0, -5%)'
      }
    },
    [theme.breakpoints.up('xl')]: {
      '&::after': {
        top: '-10%',
        left: '55%',
        transform: 'scale(1.15) translate(-55%, -10%)'
      }
    }
  },
  container: {
    display: 'grid',
    gridGap: theme.spacing(5),
    textAlign: 'center',
    justifyItems: 'center',
    position: 'relative',
    zIndex: '5',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'left'
    }
  },
  title: {
    color: '#FFF',
    maxWidth: 470,
    fontWeight: 700,
    [theme.breakpoints.up('lg')]: {
      maxWidth: 600
    }
  },
  ctaButton: {
    background: '#FFF',
    color: theme.palette.primary.main,
    fontWeight: 700,
    '&:hover': {
      background: '#FFF'
    },
    [theme.breakpoints.up('xl')]: {
      width: 170
    }
  }
}))

const CtaBanner = () => {
  const windowSize = useWindowSize()
  const classes = useStyles()

  return (
    <Box className={classes.root} mt={8} pt={3} pb={3}>
      <Container
        className={classes.container}
        maxWidth={windowSize.width < 1280 ? 600 : null}
      >
        <Typography className={classes.title} variant="h3" component="h2">
          Simplify how your team works today.
        </Typography>
        <CtaButton className={classes.ctaButton} label="Get Started" />
      </Container>
    </Box>
  )
}

export default CtaBanner
