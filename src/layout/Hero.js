import React from 'react'

import { makeStyles } from '@material-ui/core'
import CtaButton from '../components/CtaButton'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from './Container'

import illustrationIntro from '../images/illustration-intro.svg'
import backgroundPattern from '../images/bg-tablet-pattern.svg'

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: '100%',
    order: '1',
    position: 'relative',
    zIndex: '1'
  },
  title: {
    fontWeight: 700,
    // Breakpoints
    [theme.breakpoints.up('lg')]: {
      fontSize: '5em',
      lineHeight: '1'
    }
  },
  container: {
    textAlign: 'center',
    marginBottom: theme.spacing(8),
    paddingTop: 80,
    paddingBottom: 80,
    position: 'relative',
    '&::before': {
      content: `url(${backgroundPattern})`,
      position: 'absolute',
      top: '-33%',
      right: '10em',
      bottom: '25%',
      left: 0,
      transform: 'rotate(5deg) scale(0.5)'
    },
    '&::after': {
      content: `url(${backgroundPattern})`,
      position: 'absolute',
      top: '35%',
      bottom: 0,
      left: '13em',
      right: '-10%',
      transform: 'scale(0.5)'
    },
    // Breakpoints
    '@media(min-width: 600px)': {
      '&::before': {
        left: '5em',
        right: '-30%',
        top: '-30%',
        transform: 'scale(1)'
      },
      '&::after': {
        content: 'none'
      }
    },
    [theme.breakpoints.up('lg')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'start',
      justifyItems: 'center',
      textAlign: 'left',
      background: 'initial',
      '&::before': {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        transform: 'translate(56%, -38%)'
      }
    },
    [theme.breakpoints.up('xl')]: {
      '&::before': {
        left: '5%'
      }
    }
  },
  description: {
    maxWidth: 450,
    margin: '0 auto',
    marginBottom: theme.spacing(4),
    // Breakpoints
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3em',
      margin: 'initial',
      marginBottom: theme.spacing(4),
      maxWidth: 330,
      lineHeight: '1.2'
    }
  },
  boxContainer: {
    marginTop: theme.spacing(8),
    textAlign: 'center',
    justifySelf: 'start',
    position: 'relative',
    zIndex: 3,
    // Breakpoints
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left'
    },
  }
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <img className={classes.img} src={illustrationIntro} alt="into" />

      <Box className={classes.boxContainer}>
        <Typography
          className={classes.title}
          color="secondary"
          variant="h4"
          component="h2"
          gutterBottom
        >
          Bring everyone together to build better products.
        </Typography>

        <Typography className={classes.description} color="textSecondary">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </Typography>

        <CtaButton label="Get started" />
      </Box>
    </Container>
  )
}

export default Hero
