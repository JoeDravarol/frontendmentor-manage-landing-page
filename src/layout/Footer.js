import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

import Logo from '../components/Logo'
import CtaButton from '../components/CtaButton'
import Container from './Container'
import SocialIcons from './SocialIcons'
import FooterNavigation from '../components/FooterNavigation'
import { useWindowSize } from '../hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.dark,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    textTransform: 'capitalize',
    [theme.breakpoints.up('lg')]: {
      minHeight: 300,
      display: 'flex',
      alignItems: 'center'
    }
  },
  container: {
    display: 'grid',
    gridGap: theme.spacing(5.5),
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 2fr 1fr',
      gridTemplateRows: '105px auto',
      gridGap: theme.spacing(4)
    }
  },
  subscriptionForm: {
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      alignSelf: 'center'
    }
  },
  subscriptionInput: {
    display: 'inline-block',
    minWidth: 245,
    borderRadius: 30,
    padding: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    marginRight: theme.spacing(1.5),
    fontSize: '1em'
  },
  logo: {
    margin: '0 auto',
    display: 'block',
    height: 45,
    transform: 'scale(1.5)',
    [theme.breakpoints.up('lg')]: {
      margin: 'initial',
      marginLeft: theme.spacing(5),
      gridColumn: 1,
      gridRow: 1
    }
  },
  copyright: {
    justifySelf: 'center'
  },
  navLinksContainer: {
    [theme.breakpoints.up('lg')]: {
      gridColumn: 2,
      gridRow: '1/3'
    }
  },
  navLinks: {
    display: 'grid',
    alignContent: 'start',
    gridGap: theme.spacing(0.75)
  }
}))

const Footer = () => {
  const windowSize = useWindowSize()
  const classes = useStyles()

  return (
    <Box className={classes.root} component='footer'>
      <Container
        className={classes.container}
        maxWidth={windowSize.width < 1280 ? 600 : null}
      >
        <form className={classes.subscriptionForm}>
          <input
            type='email'
            className={classes.subscriptionInput}
            placeholder='Updates in your inbox...'
          />
          <CtaButton type='submit' label='Go' />
        </form>

        <Grid
          className={classes.navLinksContainer}
          container
          justifyContent='space-around'
        >
          <Grid item className={classes.navLinks}>
            <FooterNavigation
              links={['home', 'pricing', 'products', 'about us']}
            />
          </Grid>
          <Grid item className={classes.navLinks}>
            <FooterNavigation
              links={['carrers', 'community', 'privacy policy']}
            />
          </Grid>
        </Grid>

        <SocialIcons className={classes.social} />

        <Logo className={classes.logo} textColor='#FFF' />

        <Typography className={classes.copyright} color='textSecondary'>
          Copyright 2020. All rights reserved
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
