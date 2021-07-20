import React, { useState, useEffect } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core'

import Logo from '../components/Logo'
import CtaButton from '../components/CtaButton'
import Container from './Container'

const useStyles = makeStyles({
  appbar: {
    height: 80,
    justifyContent: 'center'
  },
  toolbar: {
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  logo: {
    height: 48,
    display: 'grid',
    alignItems: 'center'
  },
  menuButtonsContainer: {
    width: 450,
    display: 'flex',
    justifyContent: 'space-between'
  },
  drawerContainer: {
    padding: '20px 30px',
    textTransform: 'capitalize'
  }
})

const headersData = [
  {
    label: 'Pricing',
    href: '#'
  },
  {
    label: 'Product',
    href: '#'
  },
  {
    label: 'About us',
    href: '#'
  },
  {
    label: 'Careers',
    href: '#'
  },
  {
    label: 'Community',
    href: '#'
  },
]

const Nav = () => {
  const classes = useStyles()
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })

  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const handleResize = () => {
      return window.innerWidth < 1280
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }))
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const preventDefault = (e) => e.preventDefault()
  const handleDrawerOpen = () => {
    setState(prevState => ({ ...prevState, drawerOpen: true }))
  }
  const handleDrawerClose = () => {
    setState(prevState => ({ ...prevState, drawerOpen: false }))
  }

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          key={label}
          color='secondary'
          href={href}
          component={Link}
          onClick={() => preventDefault}
          underline='none'
        >
          {label}
        </Button>
      )
    })
  }

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          key={label}
          to={href}
          color='secondary'
          underline='none'
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      )
    })
  }

  const manageLogo = (
    <Link
      href='#'
      onClick={preventDefault}
      className={classes.logo}
    >
      <Logo />
    </Link>
  )

  const displayMobile = () => {
    return (
      <Toolbar className={classes.toolbar} disableGutters>
        {manageLogo}

        <IconButton
          color='secondary'
          area-label='menu'
          area-haspopup='true'
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor='right'
          open={drawerOpen}
          onClose={handleDrawerClose}
        >
          <div className={classes.drawerContainer}>
            {getDrawerChoices()}
          </div>
        </Drawer>
      </Toolbar>
    )
  }

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar} disableGutters>
        {manageLogo}

        <div className={classes.menuButtonsContainer}>
          {getMenuButtons()}
        </div>

        <CtaButton label='Get started' />
      </Toolbar>
    )
  }

  return (
    <AppBar className={classes.appbar} position='absolute' color='transparent' elevation={0}>
      <Container>
        {mobileView ? displayMobile() : displayDesktop()}
      </Container>
    </AppBar>
  )
}

export default Nav
